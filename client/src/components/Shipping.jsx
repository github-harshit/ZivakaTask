import React, { useState } from 'react'; 
import styles from "../styles/shipping.module.css"; 
import left from "../images/left-arrow.png"; 
import right from "../images/right-arrow.png"

function Shipping() {
     const text =["Extra 5% OFF on a minimum order of Rs. 2499. Use Code: CART5", "Extra 10% OFF on a minimum order of Rs. 3499. Use Code: CART5", " Free Shipping on order anbove Rs. 799 on prepaid payment"]
     const [index, setIndex] = useState(0)
      const handleLeft = ()=>{
         if(index!==0){
           setIndex(index-1)
         }else{
           setIndex(text.length-1); 
         }
      }
      const handleRight = ()=>{
         if(index!==text.length-1){
            setIndex(index+1); 
         }else{
           setIndex(0); 
         }
      }


  return (
    <div className={styles.container}>
      <img onClick={handleLeft} className={styles.icon} src={left}/> <p className={styles.para}> {text[index]}   </p><img onClick={handleRight} className = {styles.icon} src={right}/>

    </div>
  )
}

export default Shipping