
import { useState } from "react";




function Testepage() {

    const [name , setName] = useState('Welber')
    console.log(name)
    return (
        <div>
            <h1>Teste de requisiçoes</h1>
            <h2>Meu nome é: {name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
           
        </div>
    )
}
export default Testepage;
