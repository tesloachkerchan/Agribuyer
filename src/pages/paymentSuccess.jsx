import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import payment from '../assets/img/success.png';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/productlist');
    };

    return (
        <div>
            <Header />
            <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <div className="shadow p-5 bg-white rounded bg-light d-flex flex-column align-items-center" style={{ height: '70vh' }}>
                    <h1 className="text-success mb-4">Payment Successful!</h1>
                    <p className="mb-4">Thank you for your purchase.</p>
                    <img className="mb-4" src={payment} alt="Payment Success" style={{ width: '148px', height: 'auto' }} />
                    <div className="mt-auto">
                        <button className="btn btn-success" onClick={handleGoHome}>
                            Orders page
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentSuccess;
