import React from 'react'

import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '../layout/Loading'


import styles from './Project.module.css'

import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../project/ServiceForm'
import ServiceCard from '../project/ServiceCard'

const apiURL = process.env.REACT_APP_API_URL

const Project = () => {

  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const history = useNavigate()
  
  
  

  const {id} = useParams()
  useEffect(() => {
    setTimeout(() => {
      fetch(`${apiURL}api/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
      .then((data) => {
        setProject(data)
      })
      .catch((err) => console.log(err))
    }, 1000)
  } , [id])

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)    
  }
  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)    
  }
  function newService(service){
    let update = {...project}
    update.services = [...update.services, service]
    setProject(update)
    console.log(update)

    setTimeout(() => {
      fetch(`${apiURL}api/projects/${project._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
      }).then((res) => res.json())
      .then((data) => {
        
      })
      .catch((err) => console.log(err))
    }, 3000)
  
    /* history(`/projects`, {state:{message: 'Serviço criado com sucesso!'}}) */
    
  }
  
  async function updateProject(project){

    await fetch(`${apiURL}api/projects/${project._id}`, {
      
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((res) => res.json())
    .then((data) => {
      setProject(data)
      history('/projects', {state:{message: 'Projeto atualizado com sucesso!'}})
      
    })
    .catch((err) => console.log(err))
  }
 
  
  return (
    <>
      {project.name ? (
      <div className={styles.project_details}>
        
        <Container customClass='column'>
               

          <div className={styles.details_container}>
            <h1>Projeto: {project.name}</h1>
            <button className={styles.btn} onClick={toggleProjectForm}>
            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
            </button>
            {!showProjectForm 
            ? (
            <div className={styles.project_info}>
              <p>Categoria: {project.category[0].name}</p>
              <p><span>Orçamento:</span> R${project.budget}</p>
              <p><span>Total gasto:</span> R${project.cost}</p>              
            </div>)
            : (
              // Adicionar funcao para atualizar o projeto
            <div className={styles.project_info}>
              <ProjectForm projectData={project} btnText='Concluir edição' handleSubmit={updateProject}/>            
            </div>)}
            <div className={styles.service_form_container}>
              <h4>Adicionar serviços</h4>
              <button className={styles.btn} onClick={toggleServiceForm}>
              {!showServiceForm ? 'Adicionar serviços' : 'Fechar'}
              </button>
              {!showServiceForm ? (
                <></>
                
              ) : (<div className={styles.project_info}>
                <ServiceForm key={project._id} btnText='Adicionar Serviço' handleSubmit={newService}/>
              </div>)}                
            </div>
            <div className={styles.service_container}>
              <h4>Serviços:</h4>
              <div className={styles.service_list}>
                <Container customClass='start'>
                  {project.services.length > 0 && project.services.map((service) => (
                    <ServiceCard
                      id={service._id}
                      name={service.name}
                      cost={service.cost}
                      description={service.description}
                      key={service._id}
                    />
                  ))}
                </Container>
                
              </div>
              
            </div>
          </div>

        </Container>
      </div>) : <Loading /> }
    </>

    
  )
}

export default Project