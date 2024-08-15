import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";
import Bg1 from '../../assets/img/bg.svg'

const Logistics = () => {
 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "transportation", // Default role is set to buyer
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message); // Re-throw for error handling
      }

      const responseData = await response.json(); // Parse successful response
      setLoading(false); // Hide loading indicator
      toast.success(responseData.message);
      navigate("/login"); // Redirect to login page on success
    } catch (error) {
      setLoading(false); // Hide loading indicator in case of error
      toast.error(error.message);
    }
   
  };
  
  return (
    <div>
      <div className="container-fluid  mb-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">Logistics</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item text-dark active" aria-current="page">SignUp</li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container pt-7">
    <div className="row justify-content-center">
    <div className="col-md-8 mx-auto">
    <div className="row d-flex">
    {/* <div className="col-md-6 d-flex pt-4 align-items-center">
                <img src={Bg1} alt="Logo" className="login-img" />
              </div> */}
    
              <div className="col-md-6">
                <div className="form-container">
                  <h1 className="text-center mb-4">SignUp(Logistic)</h1>
      
      <form onSubmit={handleSubmit}  >
        <div className="mb-3" style={{color:"black",fontSize:'20px' }}>
          <label htmlFor="companyName" className="form-label" style={{color:"black", fontSize:'20px' }}>Company Name:</label>
          <input
            type={"text"}
            id="name"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3" style={{color:"black",fontSize:'20px' }}>
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type={"email"}
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3" style={{color:"black",fontSize:'20px' }}>
          <label htmlFor="password" className="form-label">Password:</label>
          <input
           type={showPassword ? "text" : "password"}
           id="password"
           name="password"
            value={data.password}
            onChange={handleOnChange}
            className="form-control"
            required
          />
          <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <BiShow/> : <BiHide />}
                  </button>
        </div>
        <div className="mb-3" style={{color:"black",fontSize:'20px' }}>
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleOnChange}
            className="form-control"
            required
          />
               <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <BiShow/> : <BiHide />}
                  </button>
        </div>
        <label htmlFor="role" style={{color:"black",fontSize:'20px' }}>Role</label>
                <select
                  id="role"
                  name="role"
                  className="form-select mb-2"
                  value={data.role}
                  onChange={handleOnChange}
                  disabled // Disable role selection for simplicity (adjust as needed)
                >
                  <option value="transportation" style={{color:"black",fontSize:'20px' }}>Transportation</option>
                </select>
        <button type="submit" className="btn btn-primary text-center">Sign Up</button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
     </div>
     </div>
  )
}

export default Logistics