import React from 'react'; 
import menu from '../data';
import styles from "../styles/dropdownMobile.module.css"
import back from "../images/left-arrow.png"
function DropdownMobile({index, setShowMobile}) {
     const handleClick = ()=>{
         setShowMobile(false); 
     }
  
 const items = menu[index].submenu; 
  return (
    <div className={styles.container}>
        <button onClick={handleClick} className={styles.back}><img src={back}/></button>
        <ul className={styles.list}>
            {items.map((x, i)=><li key={i}>{x[0]} </li>)}
        </ul>
    </div>
  )
}

export default DropdownMobile