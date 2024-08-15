import React, { useState } from "react";
import Register from "../../assets/img/register.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Dowload from "../../assets/img/download.png";
import HashLoader from 'react-spinners/HashLoader';
import { BiShow, BiHide } from "react-icons/bi";
import {BsArrowLeft} from 'react-icons/bs';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Images from "../../assets/img/images.png";

const Farmer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
    photo: "",
    phone:"" ,
    address:""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "photo") { // Handle photo upload separately
      const uploadedFile = e.target.files[0];
      setData({ ...data, photo: uploadedFile }); // Store the uploaded file object
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
      <Header/>
      <div className="container-fluid mb-3 page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="display-3 mb-3 animated slideInDown">Farmer</h1>
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
      <div className="col-md-4">
<Link className="btn btn-success btn-lg btn-block mt-4 rounded-pill" to='/Signup'>
<BsArrowLeft/>
</Link>
</div>
      <div className="container w-100 py-3 ">
        <h2 className="text-center">SignUp</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex g-1 ">
            {/* <div className="col-md-6">
              <img src={Images} style={{ width: "90%", height: "100%" }} alt="Logo" className="login-img" />
            </div> */}
            <div className="card bg-white p-4">
              <form className="py-2 " onSubmit={handleSubmit} style={{ color: "black" }}>
                <label htmlFor="file-upload" className="">
                <img src={Dowload} className=" rounded-pill mx-auto text-center " alt="" />
                </label>
                {/* <label className="text-center mb-2">Profile picture</label>
      <input
        type="file" 
        id="file-upload"
        label='Image'
        name="photo"
        className="hidden" 
        onChange={handleOnChange}
      /> */}
                <label htmlFor="Name">Name</label>
                <input
                  type={"text"}
                  id="name"
                  name="name"
                  className="form-control mb-2 border-2"
                  value={data.name}
                  onChange={handleOnChange}
                  required // Add validation for required fields
                />

                <label htmlFor="email">Email</label>
                <input
                  type={"email"}
                  id="email"
                  name="email"
                  className="form-control mb-2"
                  value={data.email}
                  onChange ={handleOnChange}
                  required // Add validation for required fields
                />

                <label htmlFor="password">Password</label>
                <div className="input-group mb-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="form-control"
                    value={data.password}
                    onChange={handleOnChange}
                    required // Add validation for required fields
                    minLength={8} // Enforce minimum password length
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "Hide" : <BiHide />}
                  </button>
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-group mb-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                    required // Add validation for required fields
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                  </button>
                </div>
                <label >Phone</label>
              <input
                placeholder="Enter your phone number" 
                type="tel"
                  id={"phone"}
                  name="phone"
                  className="form-control mb-2"
                  value={data.phone}
                  onChange ={handleOnChange}
                  required 
              />
              <label >Address</label>
              <input
               type={"text"}
                id="address"
                name="address"
                className="form-control mb-2"
                value={data.address}
                onChange ={handleOnChange}
                required 
              />

                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  className="form-select mb-2"
                  value={data.role}
                  onChange={handleOnChange}
                  disabled // Disable role selection for simplicity (adjust as needed)
                >
                  <option value="farmer">Farmer</option>
                </select>

                <div className="text-center rounded-pill">
                  {loading ? (
                    <HashLoader color={'#36D7B7'} loading={loading} size={50} />
                  ) : (
                    <button  className="btn btn-primary btn-block">
                      SignUp
                    </button>
                  )}
                </div>
              </form>
              <p className="text-left mt-2" style={{ color: "black" }}>
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Farmer