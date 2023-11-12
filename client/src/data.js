import homeware from "./images/homeware.webp"; 
import hosting from "./images/hosting.webp"; 
import shopNow from "./images/shopNow.webp"; 
import shopNow2 from "./images/shopNow2.webp"; 
 import Gifting from "./images/Gifting.webp"
 import Dining from "./images/Dining.webp"
 import Decor from "./images/Decor.webp"
 import Furnishing from "./images/Furnishing.webp"
 import Bags from "./images/Bags.webp"
 import Furniture from "./images/Furniture.webp"
 import Watches from "./images/Artifacts.webp"; 
 import Chumbaks from "./images/Chumbaks.webp"; 
 import Sale from "./images/Sale.webp"; 
 import Bedding from "./images/bedding.webp"; 
 import Cushions from "./images/cushions.webp"; 
 import GiftingTop from "./images/giftingTop.webp"; 
 import GiftWraps from "./images/giftWraps.webp"; 
 import DiningTop from "./images/DiningTop.webp"; 
 import Drinkware from "./images/Drinkware.webp"; 



const menu = [

     {
         title: "Gift Store", 
         src: "google.com", 
         submenu:  []
     }, 

    {
     title: "Home And Decor",
     src: "/google.com", 
     submenu : [
               ["Dining", "Dining & Drinkware", "Serving & Tableware", "Storage Jars","Bakeware" ],
               ["Decor And Living", "Table & Wall Decor ", "Planters", "Candles & Fragrances", "Trunks & Storage", "Rugs & Carpets"], 
               ["Furniture And Furnishing", "Wing Chairs & Sofas", "Pouffes", "Breakfast Tables", "Cushions", "Bed Linen"], 
               ["Vintage Chumbak", "Magnets & Keychains","Stationery" , "Bobble Heads", "Shaped Cushions", "Coffee Mugs"], 

            ]
    },


    {
        title: "Bags And Travel", 
        src: "/google.com", 
        submenu: [
             ["Bags And Accessories", "Backpacks", "Handbags", "Laptop sleeves & Bags", "Wallets & Pouches", "Watches"], 
             ["Travel", "Passport Holders", "Fragrances", "Scarves", "Travel Pillows", "Eyewear Cases"]
        ]
    }, 
     {
         title: "Collections", 
         src: "google.com", 
         submenu: [
            ["New Launches",  "Marigold","Essentials", "Pixel Paisley", "Folklore"]
         ] 
     }

   


    
]

 export const bodyCard = [
     {name:"S H O P N O W", img: shopNow, video:null}, 
      {name: "S H O P N O W", img: shopNow, video:"https://cdn.shopify.com/videos/c/vp/5423ef23748b4802be37ff03ef09c0cd/5423ef23748b4802be37ff03ef09c0cd.HD-1080p-7.2Mbps-20356023.mp4"},
     {name: "H O M E W A R E", img: homeware, video:null}, 
     {name: "H O S T I N G", img: hosting, video:null},
      
 ]; 

 export  const varietyCards = [
    {name:"Gifting", img:Gifting }, 
    {name: "Dining", img: Dining}, 
    {name: "Decor", img: Decor}, 
    {name: "Furnishing", img: Furnishing}, 
    {name: "Bags", img: Bags}, 
    {name:"Furniture", img: Furniture}, 
    {name: "Watches", img: Watches}, 
    {name: "Vintage Chumbaks", img: Chumbaks}, 
    {name: "Sale",  img: Sale}

 ]
  export const topCategoies = [

    {name: "BEDDING", img: Bedding }, 
    {name: "CUSHIONS", img: Cushions}, 
    {name: "GIFTING", img: GiftingTop}, 
    {name: "GIFT WRAPS", img:GiftWraps}, 
    {name: "DINING", img:DiningTop}, 
    {name: "DRINKWARE", img:Drinkware}
  ]

export default menu; 