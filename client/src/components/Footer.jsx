import React from 'react';
 import styles from "../styles/footer.module.css"; 
 import apple from "../images/apple.png"; 
 import android from "../images/android.png"

function Footer() {
  return (
    <div className={styles.container}>
     <div className={styles.box}>
       <ul className={styles.list}>
         <li> <a>Get in touch</a></li>
         <li><a>Toll Free No (1800-420-1200)</a></li>
         <li><a>Mon-Sat 10Am-6pm IST</a></li>
         <li><a>Email: Help@Chumbak.com</a></li>

       </ul>
        <ul className={styles.list}>
           <li><a>Need Help</a></li>
           <li><a>FAQ's</a></li>
            <li><a>Track Order</a></li>
             <li><a>Store Locator</a></li>
              <li><a>Return And Exchange</a></li>

        </ul>
        <ul className={styles.list}>
           <li>
            <a> About Us</a>
           </li>
            <li>
              <a>#With Chumbak Community</a>
            </li>
            <li>
              <a>Corporate Gifts</a>
            </li>
             

        </ul>
        <ul className={styles.list}>
            <li>
              <a>
                Company
              </a>
             </li>
            <li>
              <a>
                Privacy Policy
              </a>
             </li>
            <li>
              <a>
                Terms of Use
              </a>
             </li>
            <li>
              <a>
                Contact us
              </a>
             </li>
        </ul>
        
        <div className={styles.apps}>
           <h3> Our Apps </h3>
            <div className={styles.images}>
            <img className={styles.app} src={android}/>
           <img className={styles.app} src= {apple}/>

            </div>
           
        </div>
        
     </div>

   </div>
  )
}

export default Footer