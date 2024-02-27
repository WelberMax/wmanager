import React from 'react'
import styles from './catalogoCard.module.css';

const CatalogoCard = ({title, genres, plot, year, poster, fullplot}) => {
  return (
    <div className={styles.catalogo_card}>
      <div>
      <img src={poster} alt={title}/>

      </div>
      <div>
        <h3>{title}</h3>
        <p><span>Descrição :</span> {plot}</p>
        <h4><span>Genero: </span> {genres}</h4>
        <h4><span>Ano: </span> {year}</h4>
      </div>        
       

    </div>
  )
}

export default CatalogoCard