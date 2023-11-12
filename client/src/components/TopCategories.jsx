import React from 'react'
import TopCategoryCard from './TopCategoryCard'; 
import styles from "../styles/topCategories.module.css"
import { topCategoies } from '../data';
function TopCategories() {
  return (
    <>
        {/* <div className={styles.heading}>
        <h2> TOP CATEGORIES</h2>
      </div> */}
    <div className={styles.container}>
      

      {topCategoies.map((item, index)=> <TopCategoryCard key={index} item= {item}/>)}

    </div>  
    </>
  )
}

export default TopCategories; 