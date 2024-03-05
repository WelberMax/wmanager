


function Testepage() {

    const anot = [{
        id: 1,
        title: 'anotacao 1',
        descricao: 'descricao da anotação 1',
        year: '2023'
        
    },
    {
        id: 2,
        title: 'anotação 2',
        descricao: 'descricao da anotação 2',
        year: '2024'

    }
]

    
    
    return (
        <div className="container">
            <h1>Teste de requisiçoes</h1>
            <ul className="list-group">
                {anot.map((anot) => (
                    <li key={anot.id} className="list-group-item">{anot.id} - {anot.title}</li>
                ))}
            </ul>
            
           
        </div>
    )
}
export default Testepage;
