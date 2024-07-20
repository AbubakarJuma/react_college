import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddCustomer = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    username: "",
    nationality: "",
    location: "",
    phonenumber: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/owner/add", formData)
      .then((response) => {
        console.log(response.data); // Success message
        // Reset the form if needed

        toast.success("Data inserted successfull", {
          className: "toast-success",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle error scenarios
        toast.error("Data not inserted ", {
          className: "toast-error",
          autoClose: 5000,
        });
      });
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <Navigation />
      <div class="main">
        <div class="content">
          <div className="usedFor">
            <h2>
              <i className="fa fa-plus"></i> New Customer
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-user"></i> Full Name
                </span>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-user-circle-o"></i> Username
                </span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-flag"></i> Nationality
                </span>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter your Nationality"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-map-marker"></i> Current Address
                </span>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-phone"></i> Phonenumber
                </span>
                <input
                  type="text"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Enter your phonenumber"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-lock"></i> Password
                </span>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="save">
                Save Record
              </button>
              
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddCustomer;
