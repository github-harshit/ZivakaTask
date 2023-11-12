import React from 'react'; 
import styles from "../styles/three.module.css"; 
import Plates from "../images/Plates.webp"; 
import Kitchen from "../images/Kitchen.webp"; 
import Serverware from "../images/Serverware.webp"

function Three() {
  return (
    <div className={styles.container}>
         <div className={styles.item}>
            <div className={styles.imageContainer}>
             <img src={Plates}/>
            </div>
             <button  className={styles.btn}> P L A T E S</button>
         </div>
         <div className={styles.item}>
            <div className={styles.imageContainer}>
                 <img src={Kitchen}/>
            </div>
             <button className={styles.btn}>K I T C H E N</button>
         </div>
         <div className={styles.item}>
            <div className={styles.imageContainer}>
               <img src={Serverware}/>
            </div>
             <button className={styles.btn}>S E R V E W A R E</button>
         </div>
         
    </div>
  )
}

export default Three