import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Head/Header'
import Bottom6 from './Components/Layout/Bottom6';
import Main from './Components/Main/Body'
import './Components/Footer/Footer.css';
import './Components/Head/Header.css'
import './Components/Layout/Bottom6.css';
import razerLogo from './icons/razer-logo.png';
import searchIcon from './icons/search.png';
import cartIcon from './icons/cart_icon.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Bottom6 />
      <Footer />
    </div>
  );
}

export default App;
