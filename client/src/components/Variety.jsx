import React from 'react'
import styles from "../styles/variety.module.css"; 
import { varietyCards } from '../data';
 import VarietyCard from './VarietyCard';
function Variety() {
  return (
    <div className={styles.container}>
        {varietyCards.map((card, index)=> <VarietyCard key={index} card= {card}/>)}
    </div>
  )
}

export default Variety