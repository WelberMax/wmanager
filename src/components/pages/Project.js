import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'

const apiURL = process.env.REACT_APP_API_URL

const Project = () => {

  const [project, setProject] = useState({})

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
  
  return (
    <>
      {project.name ? <h1>{project.name}</h1> : <Loading /> }
    </>

    
  )
}

export default Project