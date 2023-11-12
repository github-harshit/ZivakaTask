import React from 'react'
import styles from "../styles/varietyCard.module.css"
function VarietyCard({card}) {
  return (
    <div className={styles.container}>
         <div className={styles.imageContainer}>
            <img src={card.img}/>
         </div>
          <p className={styles.name}> {card.name}</p>
    </div>
  )
}

export default VarietyCard