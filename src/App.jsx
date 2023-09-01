import './App.css'
import Main from './mainComponents/main';
import Nav from './mainComponents/nav';
import { useState } from 'react';
import Products from './mainComponents/products';

function App(){
  const [showHome, setShowHome] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleHomeClick = () => {
    setShowHome(true);
    setShowAbout(false);
    setShowProducts(false);
  };  
  const handleProductsClick = () => {
    setShowHome(false);
    setShowAbout(false);
    setShowProducts(true);
  };  
  const handleAboutClick = () => {
    setShowHome(false);
    setShowAbout(true);
    setShowProducts(false);
  };  
//////////////
switch (true){
  case showHome:
    return( 
      <div className='container'>
       <Nav
        handleAboutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
        handleProductsClick={handleProductsClick}
       />
       <Main/>
      </div>
    );
  case showProducts:
    return(
      <div className='container'>
       <Nav
        handleAboutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
        handleProductsClick={handleProductsClick}
       />
       <Products/>
      </div>
    )
  case showAbout:
    return(
      <div className='container'>
       <Nav
        handleAoutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
        handleProductsClick={handleProductsClick}
       />
       About
      </div>
    )  
}
}
export default App;