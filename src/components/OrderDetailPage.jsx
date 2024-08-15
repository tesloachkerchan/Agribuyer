import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BASE_URL } from '../utils/config';


const OrderDetailPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get orderId from URL parameter
  const [order, setOrder] = useState(null); // State to hold order details

  useEffect(() => {
    // Fetch order details using orderId
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/order/singleOrder/${id}`);
        const orderData = response.data; // Get order data from response
        setOrder(orderData);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [id, order]); // Fetch data whenever id or order changes

  return (
    <div>
      <Header/>
    <div className='center'>
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
      <div className="order-detail-container">
        <h2 className="order-detail-title">Order Detail</h2>
        {order ? (
          <div className="order-detail-info">
            <p><strong>Order ID:</strong> {id}</p>
            <p><strong>Buyer ID:</strong> {order.buyerId}</p>
            <p><strong>Created At:</strong> {order.createdAt}</p>
            {/* <p><strong>Updated At:</strong> {order.updatedAt}</p> */}
            <div className="products-container">
              <strong>Products:</strong>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id}>
                    Product Name: {product.productName}<br />
                    Product ID: {product.productId}<br />
                    Price: {product.ProductPrice}<br />
                    Quantity: {product.quantity}<br />
                    Total Price: ETB{product.totalPrice}<br />
                    Farmer ID: {product.farmerId}<br />
                    Product Owner: {product.farmerName}<br />
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        ) : null}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderDetailPage;
