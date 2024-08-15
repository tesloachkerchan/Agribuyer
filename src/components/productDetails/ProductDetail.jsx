import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetailPage.css'; 
import Footer from '../Footer';
import Header from '../Header';
import Star from '../../assets/img/Star.png';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

const ProductDetailPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: ''
  });
  const reviewMsgRef = useRef();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/products/singleProduct/${id}`);
        const productData = response.data;
        setProduct(productData);
        setReviews(productData.reviews || []);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in to submit a review");
      return;
    }
    try {
      const reviewObj = {
        username: user.username,
        rating: newReview.rating,
        comment: newReview.comment,
      };
      const response = await axios.post(`${BASE_URL}/api/v1/products/${id}/reviews`, reviewObj, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setReviews([...reviews, response.data]);
      setNewReview({ rating: 0, comment: '' });
      reviewMsgRef.current.value = '';
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <>
      <Header />
      <div className='center'>
        <div className="product-detail-container">
          <h4 className="product-detail-title">Product Detail</h4>
          {product ? (
            <div className="product-detail-info">
              <div className="product-detail-header">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-header-details">
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>Price:</strong> ETB:{product.price}/Quintals</p>
                  <p><strong>Available Quantity:</strong> {product.availableQuantity}</p>
                  <p><strong>Farmer Name:</strong> {product.productOwner}</p>
                  <p><strong>Created At:</strong> {product.createdAt}</p>
                </div>
              </div>
              <div className="description-container">
                <strong>Description:</strong>
                <p className="description">{product.description}</p>
              </div>
              <div className="reviews-container">
                <h5>Reviews:</h5>
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className="review">
                      <p><strong>{review.username}</strong> - Rating: {review.rating}/5</p>
                      <div className="rating-group">
                        {[1, 2, 3, 4, 5].map((rate) => (
                          <img 
                            key={rate}
                            src={Star} 
                            alt={`${rate} Star`} 
                            className={review.rating >= rate ? 'active-star' : 'inactive-star'} 
                          />
                        ))}
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
              <div className="add-review-container">
                <h5>Add a Review:</h5>
                <form onSubmit={handleReviewSubmit}>
                  <div className="form-group">
                    <label>Rating</label>
                    <div className="rating-group">
                      {[1, 2, 3, 4, 5].map((rate) => (
                        <span key={rate} onClick={() => setNewReview({ ...newReview, rating: rate })}>
                          <img 
                            src={Star} 
                            alt={`${rate} Star`} 
                            className={newReview.rating >= rate ? 'active-star' : 'inactive-star'} 
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      className="form-control"
                      ref={reviewMsgRef}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
