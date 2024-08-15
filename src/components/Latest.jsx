import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Star from '../assets/img/Star.png';
import { addToCart, getCartTotal } from '../redux/cartSlice'; // Adjust the import according to your file structure

import { BASE_URL } from "../utils/config";// Replace with your actual API URL

const Latest = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    let totalPrice = item.quantity * item.price;
    const tempProduct = {
      ...item,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Sort products by createdAt in descending order and take the latest four
  const latestProducts = products
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="container mb-2">
      <div className="col-lg-12">
        <h3 className="text-center mb-4">Latest Products</h3>
        <div className="row g-4">
          {latestProducts.map((product, index) => (
            <div className="col-md-6 col-lg-3 bounceINUp" key={index}>
              <div className="product-item position-relative bg-light overflow-hidden p-2">
                <img
                  className="img-fluid rounded"
                  src={product.image}
                  style={{ width: '300px', height: '150px' }}
                  alt={product.name}
                />
                <div className="d-flex flex-column text-start mt-2">
                  <div className="d-flex justify-content-between border-bottom border-primary pb-1 mb-1">
                    <Link to={`/productdetail/${product._id}`}><h5>{product.name}</h5></Link>
                    <h5 className="text-primary">Birr: {product.price}</h5>
                  </div>
                  <p className="mb-0">Available Quantity: {product.availableQuantity}</p>
                  <label className="mt-1">Farmer: {product.productOwner}</label>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <button type="button" className="btn text-primary btn-sm rounded-pill shadow-sm">
                      <FaHeart />
                    </button>
                    <div>
                      {[...Array(4)].map((_, i) => (
                        <img key={i} style={{ width: '12px' }} src={Star} alt="star" />
                      ))}
                    </div>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary btn-sm mt-2 rounded-pill">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
