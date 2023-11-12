import React, { useEffect } from 'react'
import styles from "../styles/dropdown.module.css"; 
import data from "../data"
function Dropdown({index,handleSubmenuMouseOver,handleSubmenuMouseLeave}) {
    // const listStyle = show ? `${styles.list} ${styles.show}` : `${styles.list}`;
  const submenu = data[index].submenu; 
  return (

    <div onMouseOver={handleSubmenuMouseOver} onMouseLeave={handleSubmenuMouseLeave}   className={styles.container}>
        
   {submenu.map((x, i)=> <ul className={styles.list} key={i}> {x.map((y,i)=> <li className={i===0 ? styles.first:styles.item} key={i}>{y}</li>)}  </ul>)}
        
    </div>
  
  )
}

export default Dropdown