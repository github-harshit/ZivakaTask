import React from 'react';
 import styles from "../styles/bodyCard.module.css"

function BodyCard({data}) {
  
  return (

    <div className={styles.container}>
      <img src={data.img}></img>
      <button className={styles.btn}>
         {data.name}
     </button> 

      </div>


    
    // <div className={styles.container}>
    // {data.video  ? 
    //  <>
    //  <video  autoPlay loop muted>
    //     <source src={data.video} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    //  </>
    // :
    //  <><img src={data.img}></img>
    //  <button className={styles.btn}>
    //     {data.name}
    //  </button></> }

    // </div>

  )
}

export default BodyCard