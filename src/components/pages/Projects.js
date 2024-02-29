import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


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
  
  
  
  useEffect(() => {
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
      
  }, []);
  

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
        {message && <Message type="sucess" text={message} />}
      <Container customClass='start'>

        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.name}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category[0].name}
            />
            ))}
            {!removeLoading && <Loading />}
            
      </Container>
    </div>
    
  );
}
export default Projects;
