import { useEffect, useState } from'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit ,btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})


    useEffect(() => {
        fetch('http://localhost:3015/api/category',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
            console.log(data)        
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        
        //Funcao para atualizar o State do formulário = inputs
        
    }
    function handleCategory(e){
        setProject({...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            },
        })
        
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type='text'
            text='Nome'
            placeholder='Insira o nome do projeto'
            name='name'
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />
            <Input 
            type='number'
            text='Orçamento do projeto'
            placeholder='Insira o Valor total'
            name='budget'
            handleOnChange={handleChange}
            value={project.budget? project.budget : ''}
            />
            <Select 
            name='category_id' 
            text='Escolha uma categoria' 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            //leitura value = Se tenho um valor na categoria, então ele vai receber o id da categoria, senão ele vai receber string vazia
            />
            <SubmitButton text={btnText}/>
        </form>
    )

}
export default ProjectForm