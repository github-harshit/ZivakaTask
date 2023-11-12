import React from 'react'; 
import styles from "../styles/subscribe.module.css"
function Subscribe() {
  return (
    <div className={styles.container}>
         <div className={styles.box}>
            <h2>HEAR IT FIRST</h2>
         </div>
          <p className={styles.para}>Subscribe to get the latest updates on New Collections, Events &  more</p>
           <div className={styles.input}>
             <input className={styles.email} type='email' placeholder='E mail'></input>
              <button className={styles.btn} type='submit'> S U B S C R I B E</button>
           </div>
         
         </div>
  )
}

export default Subscribe