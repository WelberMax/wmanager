import React from 'react'
import { useState, useEffect } from "react";
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import styles from './Catalogo.module.css';

import CatalogoCard from '../catalogoForm/catalogoCard'

const Catalogo = () => {
  const [catalogos, setCatalogos] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3015/api/catalogo')
    .then(response => response.json())
    .then(data => {
       setCatalogos(data)
       setRemoveLoading(true)
 
    })
  }, []);

  return (
    <div className={styles.catalogo_container}>
      
      <div>
      <h1>Catálogo de filmes</h1>
        <Container customClass='start'>
          {catalogos.length > 0 &&
            catalogos.map((catalogo) => (
              <CatalogoCard
                key={catalogo.id}
                title={catalogo.title}
                plot={catalogo.plot}
                year={catalogo.year}
                genres={catalogo.genres}
                poster={catalogo.poster}
              />
              ))}
              {!removeLoading && <Loading />}
        </Container>

      </div>
      
    </div>
    
  )
}

export default Catalogo