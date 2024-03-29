import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from'react-router-dom'


import Message from "./Message";
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";
import Loading from "../layout/Loading";

import styles from "./Projects.module.css";
import ProjectCard from "../project/ProjectCard";



const apiURL = process.env.REACT_APP_API_URL;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const history = useNavigate()
  
  
  
  useEffect(() => {
    setTimeout(() => {
      
    
      fetch(`${apiURL}api/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err));
      
    },300)
  },[]);
  function removeProject(id){
    fetch(`${apiURL}api/projects/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then(() => {
      setProjects(projects.filter((project) => project._id !== id))
      history('/projects', {state:{message: 'Projeto removido com sucesso!'}})
    })
    .catch((err) => console.log(err))
  }
  

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar projeto' />
      </div>
        {message && <Message type="success" text={message} />}
      <Container customClass='start'>

        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.name}
              id={project._id}
              name={project.name}
              budget={project.budget}
              category={project.category[0].name}
              handleRemove={removeProject}
            />
            ))}
            {!removeLoading && <Loading />}
            
      </Container>
    </div>
    
  );
}
export default Projects;
