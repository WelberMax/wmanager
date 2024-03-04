import React from 'react'
import styles from './catalogoCard.module.css';


const CatalogoCard = ({title, genres, plot, year, poster, fullplot}) => {
  
  return (
    <div  className={styles.catalogo_card}>
      <div>
        <img src={poster} alt={title}/>
      </div>   
      <div className={styles.textoCentro}>
            <div><h1>{title}</h1></div>
      </div>
        
           
        
        
        
        
                   
        
        

        <div className={styles.catalogo_info}>                  
          <h4 className={styles.genero}><span>Genero: </span> {genres}</h4>
          <h4><span>Ano: </span> {year}</h4>
        </div>
    </div>
  )
}

export default CatalogoCard