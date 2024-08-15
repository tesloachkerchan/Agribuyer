import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Star from '../assets/img/Star.png';
import { addToCart, getCartTotal } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils/config";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2); 
  

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header/>
       <div class="container-fluid page-header mb-1 wow fadeIn text-center " data-wow-delay="0.2s" style={{fontSize:'25px'}}>
        <div class="container text-center">
            <h1 class="display-3 mb-2 animated slideInDown">Markets</h1>
            <nav aria-label="breadcrumb animated slideInDown ">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>
                </ol>
            </nav>
        </div>
    </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        
        <div className="container-fluid menu bg-light py-6 my-6">
          <h2 className="commodity__title white text-center text-uppercase mt-4" style={{ color: 'black' }}>
            Select a product to Buy
          </h2>
          <div className="container mb-2">
          <div className="col-lg-12">
            <div className="row g-4">
              {products.map((product, index) => (
                <div className="col-md-6 col-lg-3 bounceINUp" key={index}>
                  <div className="product-item position-relative bg-light overflow-hidden">
                    <img
                      className="img-fluid rounded w-100"
                      src={product.image}
                      style={{ width: '130px' ,height:'200px'}}
                      alt={product.name}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4 mt-4">
                      <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                        <Link to={`/productdetail/${product._id}`}><h4>{product.name}</h4></Link>
                        <h4 className="text-primary mt-2">Birr: {product.price}</h4>
                      </div>
                      <p className="mb-0">....</p>
                      <p className="mb-0  ">Available Quantity :{product.availableQuantity}</p>
                      <label htmlFor="" className="mt-2  ">Farmer: {product.productOwner}</label>
                      
                      <div>
                        <button type="button" className="btn text-primary btn-lg rounded-pill shadow-sm hover:bg-blue-500">
                          <FaHeart />
                        </button>
                      </div>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <img key={i} style={{ width: '15px' }} src={Star} alt="star" />
                        ))}
                      </div>
                      <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-5 rounded-pill">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      )}
      <div className="pagination justify-content-center">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
