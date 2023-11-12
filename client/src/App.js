

import Shipping from './components/Shipping';
import Header from './components/Header';
import Variety from './components/Variety';
 import Body from './components/Body';
 import Three from "./components/Three"; 
 import MariGoldDiwali from './components/MariGoldDiwali';
 import Footer from  "./components/Footer.jsx"; 
 import Subscribe from './components/Subscribe.jsx';
import TopCategories from './components/TopCategories.jsx';
function App() {
  return (
    <div className="App">
     <Shipping/>
        <Header/>
       <Variety/> 
        <Body/>
       <Three/>
        <MariGoldDiwali/>
         <Subscribe/>
          <TopCategories/>
         <Footer/> 
    </div>
  );
}

export default App;
