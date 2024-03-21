import React from 'react'

import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Message from './Message'


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
  const [message, setMessage] = useState('')
  const [type, setType] = useState()

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
    }, 500)
  } , [id])

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)    
  }

  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)    
  }
  function newService(service){
    //o projeto vem completo, e o serviço é incluido na lista de servicos
    let update = {...project}

    if(service.cost > update.budget){
      setMessage('Orcamento ultrapassado, verifique o valor do servico')
      setType('error')
      return false
      
    }
    //adicionando o servico ao projeto
    update.services = [...update.services, service]
    //atualizando o projeto
    update.cost = Number(update.cost) + Number(service.cost)
    
        

    setTimeout(() => {
      fetch(`${apiURL}api/projects/${project._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
      }).then((res) => res.json())
      .then((data) => {      
        setMessage('Serviço criado com sucesso!')
        setType('success')
        setShowServiceForm(false)
        setProject(data.response)
              
      })
      .catch((err) => console.log(err))
    }, 1000)
    
  }
  function removeService(id){
    let update = {...project}
    update.services = update.services.filter((service) => service._id !== id)
    setProject(update)
    
    fetch(`${apiURL}api/projects/${project._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    }).then((res) => res.json())
    .then((data) => {
      
      setProject(data.response)
    })
    .catch((err) => console.log(err))
  }
  async function updateProject(project){
    if(project.name === '' || project.budget === '') {
      setMessage('Preencha todos os campos')
      setType('error')
      return false
    }
    if(project.budget < project.cost){
      setMessage('O orcamento não pode ser menor que o custo do projeto')
      setType('error')
      return false
    }

    await fetch(`${apiURL}api/projects/${project._id}`, {
      
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((res) => res.json())
    .then((data) => {        
      setMessage('Projeto atualizado com sucesso!')
      setType('success')
      setShowProjectForm(false)
      setProject(data.response)      
    })
    .catch((err) => console.log(err))
  }
  function resetCost(){
    let update = {...project}
    update.cost = 0
    fetch(`${apiURL}api/projects/${project._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    }).then((res) => res.json())
    .then((data) => {
      setProject(data.response)
    })
    .catch((err) => console.log(err))
  } 
  return (
    <>
    
      {project.name ? (        
      <div className={styles.project_details}>        
        <Container customClass='column'>
        {message && <Message text={message} type={type}/>}                

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
              <button onClick={resetCost} className={styles.btn}>Resetar gastos </button>              
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
                      handleRemove={removeService}
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