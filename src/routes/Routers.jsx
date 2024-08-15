import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Products from '../pages/Products';
import SingleProduct from '../components/productDetails/ProductDetail';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Farmer from '../pages/SignIn/Farmer';
import Buyer from '../pages/SignIn/Buyer';
import Logistics from '../pages/SignIn/Logistics';
import Blog from '../pages/blog/BlogPage';
import Single from '../pages/single/Single';
import OrderTable from '../pages/OrderTable';
import ProfilePage from '../pages/profile/ProfilePage';
import FarmerStatus from '../pages/FarmerStatus'
import PaymentSuccess from '../pages/paymentSuccess'
import PageNotFound from '../components/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import OrderDetailPage from '../components/OrderDetailPage';

const Routers = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user && user.role === 'buyer' ? <Home /> : <Home />
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={user && user.role === 'buyer' ? <Cart /> : <Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productdetail/:id" element={<SingleProduct />} />
      <Route path="/signUpFarmers" element={<Farmer />} />
      <Route path="/signUpBuyer" element={<Buyer />} />
      <Route path="/signUpLogistic" element={<Logistics />} />
      <Route path="/orders" element={<OrderTable />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Single />} />
      <Route path="/productlist" element={user && user.role === 'buyer' ? <OrderTable /> : <Login />} />
      <Route path="/orderdetailpage/:id" element={user && user.role === 'buyer' ? <OrderDetailPage /> : <Login />} />
      <Route path="/farmerStatus" element={user && user.role === 'buyer' ? <FarmerStatus /> : <Login />} />

      <Route path="/profile/:id" element={user ? <ProfilePage /> : <Login />} />
      <Route path="/payment-success" element={  <PaymentSuccess  /> } />
      <Route path="/*" element={<PageNotFound />} />


    </Routes>
  );
};

export default Routers;
