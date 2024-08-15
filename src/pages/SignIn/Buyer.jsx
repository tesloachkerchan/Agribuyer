import { useRef, useState } from "react";
import "../../styles/register.css";
import axios from "axios";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { toast, ToastContainer } from 'react-toastify';
import { BASE_URL } from "../../utils/config";

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const role = useRef();
  const profilePicture = useRef();
  const phone = useRef();
  const address = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const formData = new FormData();
      formData.append("name", name.current.value);
      formData.append("email", email.current.value);
      formData.append("password", password.current.value);
      formData.append("confirmPassword", passwordAgain.current.value);
      formData.append("role", role.current.value);
      
      formData.append("profilePicture", profilePicture.current.files[0]);
      formData.append("phone", phone.current.value);
      formData.append("address", address.current.value);
      try {
        await axios.post(`${BASE_URL}/api/v1/auth/buyer/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Registered successfully');
        navigate('/login');
      } catch (err) {
        toast.error('Failed to register, try again!');
        console.log(err);
      }
    }
  };

  return (
    <>
      <Header/>
      <div className="container-fluid mb-3 page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown">Buyer</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="text-body" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-dark active" aria-current="page">
                SignUp
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerForm">
            <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
            <form className="registerBox" onSubmit={handleClick}>
              <label className="registerLabel">Username</label>
              <input
                placeholder="Enter your username"
                ref={name}
                required
                className="registerInput"
              />
              <label className="registerLabel">Email</label>
              <input
                placeholder="Enter your email"
                ref={email}
                required
                className="registerInput"
                type="email"
              />
              <label className="registerLabel">Password</label>
              <input
                placeholder="Enter your password"
                ref={password}
                required
                className="registerInput"
                type="password"
                minLength="6"
              />
              <label className="registerLabel">Password Again</label>
              <input
                placeholder="Re-enter your password"
                ref={passwordAgain}
                required
                className="registerInput"
                type="password"
                minLength="6"
              />
              <label className="registerLabel">Role</label>
              <select ref={role} required className="registerInput">
                <option value="buyer">Buyer</option>
              </select>
              
              <label className="registerLabel">Profile Picture</label>
              <input
                type="file"
                ref={profilePicture}
                className="registerInput"
              />
              <label className="registerLabel">Phone</label>
              <input placeholder="Enter your phone number"
                ref={phone}
                required
                className="registerInput"
              />
              <label className="registerLabel">Address</label>
              <input
                placeholder="Enter your address"
                ref={address}
                required
                className="registerInput"
              />
              <button className="registerButton" type="submit">
                Sign Up
              </button>
              <Link to='/login'>
                <button type="button" className="loginRedirectButton">
                  Log into Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}