import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SignUp = () => {
  return (
    <>
    <Header/>
          <div>
         <div className="container-fluid page-header  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-6 mb-3 animated slideInDown">SignUp</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="text-body" >Home</a></li>
                    <li className="breadcrumb-item text-dark active" aria-current="page">SignUp</li>
                </ol>
            </nav>
        </div>
    
    </div>
    </div>

    <div className="container">
    <h2 className="text-center mb-4">Welcome to One ገበያ</h2>
    <h4 className="text-center">Sign up to unlock exclusive deals and offers!</h4>
    <div className="row justify-content-center mt-4">
      
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h5 className="card-title">🛒Buyer</h5>
            <Link to='/signUpBuyer' className="btn btn-primary rounded-pill btn-lg btn-block">Select</Link>
          </div>
        </div>
      </div>
      
    </div>
    <Link to='/login' className="btn btn-success btn-lg btn-block mt-4 rounded-pill">Back to Login</Link>
    <p className="text-center mt-3 text-black">We Provide Organic And Tasty Agricultural Products For Our Customers.</p>

  </div>
  <Footer/>
    </>

    
  )
}

export default SignUp