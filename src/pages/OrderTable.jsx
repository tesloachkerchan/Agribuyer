import React, { useEffect, useContext, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const OrderTable = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/order/buyer/${user._id}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [user]);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const emptyOrdersMsg = (
    <h4 className="container text-center mb-2 pt-3">
      You have no orders.
    </h4>
  );

  return (
    <>
      <Header/>
      <div className="container-fluid page-header mb-1 wow fadeIn text-center" data-wow-delay="0.2s" style={{ fontSize: '25px' }}>
        <div className="container text-center">
          <h1 className="display-3 mb-2 animated slideInDown">My Orders</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Orders</li>
            </ol>
          </nav>
        </div>
      </div>

      {currentOrders.length === 0 ? (
        emptyOrdersMsg
      ) : (
        <div className="container-fluid py-5" style={{ fontSize: "20px", color: 'black' }}>
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table" style={{ color: 'black' }}>
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    {/* <th scope="col">Products</th> */}
                    <th scope="col">Total Amount</th>
                    <th scope="col">Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((order) => (
                    <tr key={order._id}>
                     
                      <Link to={`/orderdetailpage/${order._id}`}> <td>{order._id}</td></Link>

                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      
                      <td>Birr: {order.overallTotal}</td>
                      <td>{order.orderStatus}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="pagination justify-content-center">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default OrderTable;
