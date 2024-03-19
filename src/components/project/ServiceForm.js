import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import {useState} from "react"

function ServiceForm({handleSubmit, btnText}) {
    const [service, setService] = useState([])
    

    const submit = e => {
        e.preventDefault()
        handleSubmit(service)
    }
    const handleServiceChange = (e) => {
        setService({...service, [e.target.name]: e.target.value})
        

    }

    return(
        <div>
            <form onSubmit={submit}>
                <Input
                    type="text"
                    text="Nome do Serviço"
                    name="name"
                    placeholder="Insira o nome do Serviço"
                    handleOnChange={handleServiceChange}
                    
                    
                />
                <Input
                    type="number"
                    text="Custo do Serviço"
                    name="cost"
                    placeholder="Insira o custo do Serviço"
                    handleOnChange={handleServiceChange}
                    
                />
                <Input
                    type="text"
                    text="Descricão do Serviço"
                    name="description"
                    placeholder="Descreva o Serviço"
                    handleOnChange={handleServiceChange}
                    
                />
                <SubmitButton text={btnText}/>
            </form>
                
        </div>
    )
}
export default ServiceForm
   