import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Head/Header'
import Bottom6 from './Components/Layout/Bottom6';
import Main from './Components/Main/Body'
import Support from './Components/Other/Support/Support';
import Edge from './Components/Pages/Edge/Edge';
import './Components/Footer/Footer.css';
import './Components/Head/Header.css'
import './Components/Layout/Bottom6.css';
import './Components/Other/Support/Support.css';
import razerLogo from './icons/razer-logo.png';
import searchIcon from './icons/search.png';
import cartIcon from './icons/cart_icon.png';

function App() {
  const [showEdge, setShowEdge] = useState(false);

  return (
    <div className="App">
      <Header />
      {showEdge ? (
        <Edge />
      ) : (
        <>
          <Main />
          <Bottom6 handleEdge={() => setShowEdge(true)} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
