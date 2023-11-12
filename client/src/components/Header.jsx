import React, {useState} from 'react'; 
import menu from "../data"; 
import MenuItem from './MenuItem';
import MenuItemMobile from './MenuItemMobile';
import styles from "../styles/header.module.css"
import Dropdown from './Dropdown';
import DropdownMobile from './DropdownMobile';
 import searchIcon from "../images/searchIcon.png"; 
 import userIcon from "../images/userIcon.png"; 
 import cartIcon from "../images/bagIcon.png"; 
 import logo from "../images/logo.webp"; 
 import hamburger from "../images/hamburger.png"; 
 import close from "../images/close.png"

function Header() {
    const[show, setShow] = useState(false); 
    const[ind, setInd] = useState(null); 
    // for  mobile hamburger menu 
    const[showMobile, setShowMobile] = useState(false); 
    const[indMobile, setIndMobile] = useState(null);


    const[flag, setFlag] = useState(false); 
    let submenuTimer;
    
    const handleMenu = ()=>{
       setFlag(!flag); 
    }
    
    const handleMouseOver = (index)=>{
        clearTimeout(submenuTimer); 
        setShow(true);
        setInd(index)

     }
     const handleMouseLeave  = ()=>{
      clearTimeout(submenuTimer); 
    
        submenuTimer = setTimeout(() => {
            setShow(false);
          }, 500); // Adjust the delay time as needed
        };
        
     
     const handleSubmenuMouseOver = () => {
       
        // Clear the timer to prevent hiding the submenu
        clearTimeout(submenuTimer);
      };

      const handleSubmenuMouseLeave =()=>{
       
         setShow(false); 
      }
     const handleClick = (index)=>{
          setIndMobile(index); 
          setShowMobile(true); 

     }
     
      return (
    <div className={styles.container}>
      {flag && <div className={styles.mobile}>
         {showMobile ?<DropdownMobile index = {indMobile}  setShowMobile= {setShowMobile}/> : <div>
         <ul className= {styles.listMobile}>
         {menu.map((data,index)=>{
             return <MenuItemMobile key={index} data={data} index={index} handleClick = {handleClick}/>
          })}
         </ul>
          <ul className= {styles.bottomList}>
            <div className={styles.listBox}>
                 
            <li>
               <a>Store Locator</a>
            </li>
            </div>
             <div className={styles.listBox}>
             <li>
               <a>Profile</a>
             </li>
             </div>

             <div className={styles.listBox}>
             <li>
               <a>Help</a>
            </li>
               
            </div> 
             <div className={styles.listBox}>
               <li>
               <a>Download The App</a>
               </li>
             </div>
            
            
            
            
           
            
          </ul>
            </div> }
         {/* {showMobile &&  } */}
         
        
          

         </div>
}
      

    <div className= {styles.box}>
        <button onClick={handleMenu} className={ styles.hamburger}><img  src={flag?  close :hamburger}/></button>
          <div className={styles.logo}>
            <img className={styles.logoImage} src={logo}></img>
           
          </div>
    
         <ul className= {styles.list}>

             {menu.map((data, index)=>
          <MenuItem  key= {index} data= {data} index = {index} handleMouseOver = {handleMouseOver} handleMouseLeave  = {handleMouseLeave}  border= {index===ind}  /> 
               
          
             )}     
          </ul>
          <ul className={styles.icons}>
            <li> <a><img className={styles.img} src={userIcon}/></a> </li>
            <li><a> <img className={styles.img} src={searchIcon}/></a></li>
            <li><a > <img className={styles.img} src={cartIcon}/></a></li>
          </ul>
          </div>
          
       { show  &&   <Dropdown  handleSubmenuMouseOver= {handleSubmenuMouseOver} handleSubmenuMouseLeave= {handleSubmenuMouseLeave} index = {ind}/>  }
      
      
         
    
    </div>
  )
}

export default Header