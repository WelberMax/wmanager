import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import styles from './ServiceCard.module.css'


const ServiceCard = ({id, name, cost, description, handleRemove}) => {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }
  return (
    <div className={styles.service_card}>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Valor: </span> R${cost}
          
        </p>
        <p>
          <span>Descricão: </span> {description}
        </p>
      </div>
      <div className={styles.service_card_actions}>
        
        <button onClick={remove}>
          <RiDeleteBinLine /> Remover
        </button>
      </div>
    </div>
  )
}

export default ServiceCard