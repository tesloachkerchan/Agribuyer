import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../assets/img/logo2.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const [showMenu, setShowMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-fluid fixed-top pt-4 wow fadeIn" data-wow-delay="0.1s">
      <nav className="navbar navbar-expand-lg navbar-primary py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand pt-3 ms-4 ms-lg-0">
          <img src={logo2} alt="Your Logo" style={{ width: '100px', height: '100px',borderRadius:'50px' }} />
        </Link>
        <button
          onClick={handleToggle}
          type="button"
          className="navbar-toggler me-4"
          aria-controls="navbarCollapse"
          aria-expanded={showMenu ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className={`collapse navbar-collapse d-lg-flex justify-content-lg-center ${showMenu ? 'show' : ''}`} id="navbarCollapse">
          <div className="navbar-nav p-4 p-lg-0" style={{ fontSize: '20px', color: 'black' }}>
            <Link to="/" className="nav-item nav-link active">
              {t('home')}
            </Link>
            <Link to="/Products" className="nav-item nav-link">
              {t('products')}
            </Link>
            <Link to="/contactUs" className="nav-item nav-link">
              {t('contact')}
            </Link>
            {!user && (
              <Link to="/login" className="nav-item nav-link">
                {t('login')}
              </Link>
            )}
          </div>
          <Link to="/Cart" className="btn-cart btn-md-square btn btn-black bg-white rounded-pill ms-4 d-lg-inline-flex">
            <i className="fa fa-shopping-cart"></i>
            <span className="btn-sm rounded-circle btn-danger d-lg-inline-block">{totalItems}</span>
          </Link>
          {user && (
            <div className="profileMenu ms-4 d-flex align-items-center position-relative">
              <img
                src={user.photo || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                alt=""
                className="topbarImg"
                onClick={toggleDropdown}
                style={{ cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%' }}
              />
              {dropdownVisible && (
                <div className="dropdownMenu position-absolute mt-2" style={{ top: '100%', background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1000 }}>
                  <Link to={`/profile/${user._id}`} className="dropdownItem" style={{ display: 'block', padding: '10px' }}>
                    {t('profile')}
                  </Link>
                  <Link to="/productlist" className="dropdownItem" style={{ display: 'block', padding: '10px' }}>
                    {t('Order')}
                  </Link>
                  <Link to="/farmerStatus" className="dropdownItem" style={{ display: 'block', padding: '10px' }}>
                    {t('farmerStatus')}
                  </Link>
                  <span className="dropdownItem" onClick={handleLogout} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>
                    {t('logout')}
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="language-switcher ms-4">
            <button className="lang-btn" onClick={() => changeLanguage('en')}>EN</button>
            <button className="lang-btn" onClick={() => changeLanguage('am')}>AM</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
