import React from 'react'; 
import styles from "../styles/body.module.css"; 
import { bodyCard } from '../data';
 import BodyCard from './BodyCard';

function Body() {
  return (
     <div className={styles.container}>
       {bodyCard.map((item, index)=>{
         return <BodyCard key={index} data = {item}/>
       })}
     </div>
  )
}

export default Body