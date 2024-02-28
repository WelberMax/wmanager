import { useNavigate } from'react-router-dom'


import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'

const apiURL = process.env.REACT_APP_API_URL;

function Newproject(){
    const history = useNavigate()

    function createPost(project){

        project.cost = 0
        project.services = []

        fetch(`${apiURL}api/projects`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
     .then((res) => res.json())
     .then((data) => {
        console.log(data)
        history('/projects', {state:{message: 'Projeto criado com sucesso!'}})
     })
    }

    

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
        </div>
    )
}

export default Newproject