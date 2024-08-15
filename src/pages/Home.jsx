import React from 'react';
import Carousel1 from '../assets/img/carousel-1.jpg';
import Carousel2 from '../assets/img/carousel-2.jpg';
import Green from '../assets/img/green-1.webp';
import Price1 from '../assets/img/green-2.webp';
import Trust from '../assets/img/trust.png';
import Trading from '../assets/img/trading.png';
import Check from '../assets/img/check.png';
import Transport from '../assets/img/import.png';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Latest from '../components/Latest';
import Marquee from '../components/mark/Marquee';
import { useTranslation } from 'react-i18next';
import translations from './translations.json'; // Adjust the path as per your file structure

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header />

      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={Carousel1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 col-md-10 col-sm-12">
                      <h6 className="display-2 mb-5 animated slideInDown">{t('header.carousel.caption.1')}</h6>
                      <Link to='/products' className="btn btn-primary py-3 px-4" style={{ borderRadius: '50px', fontSize: '18px', color: 'black' }}>{t('buttons.products')}</Link>
                      <Link to='/contactUs' className="btn btn-secondary py-3 px-4 ms-3" style={{ borderRadius: '50px', fontSize: '18px', color: 'black' }}>{t('buttons.services')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Carousel2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 col-md-10 col-sm-12">
                      <h6 className="display-2 mb-5 animated bounceInDown">{t('header.carousel.caption.2')}</h6>
                      <Link to='/products' className="btn btn-primary py-3 px-4" style={{ borderRadius: '50px', fontSize: '17px', color: 'black' }}>{t('buttons.products')}</Link>
                      <Link to='/contactUs' className="btn btn-secondary py-3 px-4 ms-3" style={{ borderRadius: '50px', fontSize: '17px', color: 'black' }}>{t('buttons.services')}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t('Previous')}</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t('Next')}</span>
          </button>
        </div>
      </div>

      <Services />

      <div className="container-xxl py-5" style={{ fontSize: '17px', color: 'black' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100 rounded-pill" src={Green} alt="Green" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-5 mb-4" style={{ fontSize: '30px' }}>{t('about.title')}</h1>
              <p className="mb-4">{t('about.description')}</p>
              <p><i className="fa fa-check text-primary me-3"></i>{t('about.feature1')}</p>
              <p><i className="fa fa-check text-primary me-3"></i>{t('about.feature2')}</p>
              <p><i className="fa fa-check text-primary me-3"></i>{t('about.feature3')}</p>
              <Link to='/aboutUs' className="btn btn-primary rounded-pill py-3 px-5 mt-3">{t('readMore')}</Link>
            </div>
          </div>
        </div>
      </div>

      <Latest />

      <div className="container-fluid bg-light1 bg-icon mt-5 py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-5 text-black mb-3" style={{ fontSize: '30px' }}>{t('overview.title')}</h1>
              <p className="text-black mb-0" style={{ fontSize: '17px', color: 'black' }}>{t('overview.description')}</p>
            </div>
            <div className="col-md-5 col-sm-12">
              <img src={Price1} className="img-fluid" alt="Price" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px', fontSize: '17px' }}>
            <h5 className="display-5 mb-3">{t('features.title')}</h5>
            <p style={{ color: 'black' }}></p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={Trust} alt="Trust" />
                <h4 className="mb-3" style={{ fontSize: '18px' }}>{t('features.item1.title')}</h4>
                <p className="mb-4" style={{ fontSize: '16px', color: 'black' }}>{t('features.item1.description')}</p>
                <Link to='/' className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill">{t('readMore')}</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={Trading} alt="Trading" />
                <h4 className="mb-3" style={{ fontSize: '18px' }}>{t('features.item2.title')}</h4>
                <p className="mb-4" style={{ fontSize: '16px', color: 'black' }}>{t('features.item2.description')}</p>
                <Link to='/' className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" style={{ fontSize: '16px' }}>{t('readMore')}</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={Check} alt="Check" />
                <h4 className="mb-3" style={{ fontSize: '18px' }}>{t('features.item3.title')}</h4>
                <p className="mb-4" style={{ fontSize: '16px', color: 'black' }}>{t('features.item3.description')}</p>
                <Link to='/' className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill">{t('readMore')}</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.7s">
              <div className="bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src={Transport} alt="Transport" />
                <h4 className="mb-3" style={{ fontSize: '18px' }}>{t('features.item4.title')}</h4>
                <p className="mb-4" style={{ fontSize: '16px', color: 'black' }}>{t('features.item4.description')}</p>
                <Link to='/' className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill">{t('readMore')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
