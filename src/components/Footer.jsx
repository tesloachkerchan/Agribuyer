
import React from 'react';
import { Link } from 'react-router-dom';
import Weather from '../components/Weather'; // Import the Weather component

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ fontSize: '20px', color: 'white' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="fw-bold text-primary mb-4">One ገበያ</h3>
              <p>We Provide Organic And Tasty Agricultural Products For Our Customers.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p><i className="fa fa-map-marker-alt me-3"></i>Arbaminch, Ethiopia</p>
              <p><i className="fa fa-phone-alt me-3"></i>+251939063697</p>
              <p><i className="fa fa-envelope me-3"></i>AgroCon@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4" >Quick Links</h5>
              <Link to='/contactUs' className="btn btn-link" style={{ fontSize: '17px' }}>Contact Us</Link>
              <Link to='/blog' className="btn btn-link" style={{ fontSize: '17px' }}>blogs</Link>
              <Link to='/' className="btn btn-link" style={{ fontSize: '17px' }}>Terms & Condition</Link>
              <Link to='/' className="btn btn-link" style={{ fontSize: '17px' }}>Support</Link>
            </div>
            <div className="col-lg-3 col-md-6">

              <Weather /> 
              
              <h4 className="text-light mb-4">Our Social Links</h4>
              <div className="d-flex pt-2">
                <Link to='/' className="btn btn-square btn-outline-light rounded-circle me-1"><i className="fab fa-twitter"></i></Link>
                <Link to='/' className="btn btn-square btn-outline-light rounded-circle me-1"><i className="fab fa-facebook-f"></i></Link>
                <Link to='/' className="btn btn-square btn-outline-light rounded-circle me-1"><i className="fab fa-telegram"></i></Link>
                <Link to='/' className="btn btn-square btn-outline-light rounded-circle me-0"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                &copy; <Link to='/'>One ገበያ</Link>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to='/' className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  );
};

export default Footer;
