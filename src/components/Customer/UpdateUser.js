import {useParams} from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUser = () => {
  
const {ownerID} = useParams();


const [data , setData ] = useState({
    ownerName: '',
    username: '',
    nationality: '',
    location: '',
    phonenumber: '',
    password:''

});


const handleInputChange = (event) => {
  const {name,value} =event.target;
  setData({...data, [name]: value});
};

const handleSubmit = (event) => {
  event.preventDefault();

  axios.put('http://localhost:8080/owner/update/'+ownerID,data)
  .then(response =>{
    console.log(response);

    toast.success("Updated successfull", {
      className: "toast-success",
      autoClose: 5000,
    });
  })
 
};

useEffect(() => {


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/owner/byId'+ownerID); // Replace with your API endpoint
     
      setData(response.data);
  
      //console.log(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  fetchData();
}, [ownerID]);

http://localhost:8080/owner/byId3



  return (

    <><Header />
    <ToastContainer />
    <Navigation /><div className="main">
      <div className="content">

        <div className="usedFor">
          <h2><i className="fa fa-bank"></i> Update Customer</h2>
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
                value={data.ownerName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required />
            </div>
            <div class="input-box">
              <span class="details">
                <i className="fa fa-user-circle-o"></i> Username
              </span>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required />
            </div>
            <div class="input-box">
              <span class="details">
                <i className="fa fa-flag"></i> Nationality
              </span>
              <input
                type="text"
                name="nationality"
                value={data.nationality}
                onChange={handleInputChange}
                placeholder="Enter your Nationality"
                required />
            </div>
            <div class="input-box">
              <span class="details">
                <i className="fa fa-map-marker"></i> Current Address
              </span>
              <input
                type="text"
                name="location"
                value={data.location}
                onChange={handleInputChange}
                placeholder="Enter your address"
                required />
            </div>
            <div class="input-box">
              <span class="details">
                <i className="fa fa-phone"></i> Phonenumber
              </span>
              <input
                type="text"
                name="phonenumber"
                value={data.phonenumber}
                onChange={handleInputChange}
                placeholder="Enter your phonenumber"
                required />
            </div>
            <div class="input-box">
              <span class="details">
                <i className="fa fa-lock"></i> Password
              </span>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required />
            </div>
            <button type="submit" className="update">
              Update Record
            </button>
            <button type="submit" className="back">
              Back
            </button>
          </div>
        </form>


      </div>
    </div><Footer /></>
  );
};

export default UpdateUser;