import './Header.css';
import razerLogo from '../../icons/razer-logo.png';
import searchIcon from '../../icons/search.png';
import cartIcon from '../../icons/cart_icon.png';

function header() {
  return (
      <section className='background'>
      <div className="App">
        <header className="App-header">
          <div>
            <button className='logo-container'>
              <img className="logo" src={razerLogo} alt="Razer logo"/>
            </button>
          </div>
          <button className='header-button'>Store</button>
          <button className='header-button'>PC</button>
          <button className='header-button'>Console</button>
          <button className='header-button'>Mobile</button>
          <button className='header-button'>Lifestyle</button>
          <button className='header-button'>Services</button>
          <button className='header-button'>Community</button>
          <button className='header-button'>Support</button>
          <div>
            <button className='search-button'>
              <img className="search-icon" src={searchIcon} alt="Search icon" />
            </button>
            <button className='cart-button'>
              <img className='cart-icon' src={cartIcon} alt="Cart icon" />
            </button>
          </div>
        </header>
        <div className="main">
          <h1 className="siteNotification">Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game.  
          <button className="siteNotification-button">
          Shop Now <span className="greater-then">&gt;</span>
          </button>
           </h1>
        </div>
      </div>
      </section>
  );
}

export default header;