import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  const { getTotalCartAmount, token, setToken, searchValue, setSearchValue } =
    useContext(StoreContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  }

  function handleSearch(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu('home')}
            className={menu === 'home' ? 'active' : ''}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu('menu')}
            className={menu === 'menu' && 'active'}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu('mobile-app')}
            className={menu === 'mobile-app' && 'active'}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu('contact-us')}
            className={menu === 'contact-us' && 'active'}
          >
            contact us
          </a>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search-icon">
            <img src={assets.search_icon} alt="" />
            <input
              name="search"
              type="text"
              placeholder="Search for a dish"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
          <div className="navbar-basket-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() && 'dot'}></div>
          </div>

          {!token ? (
            <button onClick={() => setShowLogin(true)}>sign in</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="searchbar">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="" />
          <input
            name="search"
            type="text"
            placeholder="Search for a dish"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
