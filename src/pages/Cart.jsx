import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from '../components/Header'
import Footer from '../components/Footer' 
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import emptyCartImage from "../assets/img/empty.gif";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../utils/config";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const handleCheckout = async () => {
    const buyerId = user._id; // Replace with actual buyer ID
    const products = cartProducts.map(product => ({
      productId: product._id,
      quantity: product.quantity,
    }));
    console.log(products)
    console.log(buyerId)
    try {
      const orderResponse = await axios.post(`${BASE_URL}/api/v1/order`, {
        buyerId,
        products,
      });
      
      if (orderResponse.status === 201) {
        const orderId = orderResponse.data._id; // Assuming the response contains the order ID
        
        // Now initiate the Chapa payment process
        const paymentResponse = await axios.post(
          "https://agribackend-mstw.onrender.com/accept-payment",
          {
            amount: totalAmount,
            currency: 'ETB',
            email: user.email,
            first_name: user.firstName,
            phone_number: user.phoneNumber,
            tx_ref: `order-${orderId}-${Date.now()}`,
            // return_url: `http://localhost:3001/home`,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        
        if (paymentResponse.status === 200) {
          window.location.href = paymentResponse.data.data.checkout_url;
        } else {
          console.error('Failed to initialize payment:', paymentResponse.data);
        }
      } else {
        console.error('Failed to place order:', orderResponse.data);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

  const emptyCartMsg = (
    <h4 className="container text-center mb-2 pt-3">
      Your Cart is Empty
      <img src={emptyCartImage} alt="Empty Cart" />
    </h4>
  );

  return (
    <>
      <Header/>
      <div className="container-fluid page-header mb-1 wow fadeIn text-center" data-wow-delay="0.2s" style={{ fontSize: '25px' }}>
        <div className="container text-center">
          <h1 className="display-3 mb-2 animated slideInDown">Order</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container-fluid py-5" style={{ fontSize: "20px", color: 'black' }}>
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table" style={{ color: 'black' }}>
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={cartProduct.image}
                            alt={cartProduct.image}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">Birr: {cartProduct.totalPrice}</p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className="btn btn-md rounded-circle bg-light border mt-4"
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0">Birr: {totalAmount}</p>
                    </div>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">Birr: {totalAmount}</p>
                  </div>
                  <button
                    className="btn border-primary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button" onClick={handleCheckout}
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Cart;
