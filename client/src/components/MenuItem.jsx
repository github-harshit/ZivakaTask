import React, {useState} from 'react'
import Dropdown from './Dropdown'; 
import styles from "../styles/menuItem.module.css"
function MenuItem({data, index, handleMouseOver, handleMouseLeave, border}) {
   
  return (
    <div className={border? styles.border :styles.container} onMouseOver={()=>handleMouseOver(index)}  onMouseLeave={handleMouseLeave}>
        <li>
            <a > {data.title} </a>
          
        </li>
    </div>
  )
}

export default MenuItem