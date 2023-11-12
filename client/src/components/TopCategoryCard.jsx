import React from 'react'
import styles from "../styles/topCategoriesCard.module.css"
function TopCategoryCard({item}) {
  return (
    <div className={styles.container}>
        <img src={item.img}/>
         <button className={styles.btn}> {item.name}</button>
    </div>
  )
}

export default TopCategoryCard; 