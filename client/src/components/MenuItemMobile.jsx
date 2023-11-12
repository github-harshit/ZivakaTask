import React from 'react'
import styles from "../styles/menuItemMobile.module.css"
function MenuItemMobile({data, index, handleClick}) {
  return (
    <div className={styles.container}>
        <li className={styles.list}>
            <a className={styles.link} onClick={()=>handleClick(index)}> {data.title}</a>
        </li>
    </div>
  )
}

export default MenuItemMobile