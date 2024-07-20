import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import "../Styles/Main.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerApplication = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/application/all"); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      toast.error("Connection Error ", {
        className: "toast-error",
        autoClose: 5000,
      });
    }
  };


  // delete application data

  const handleDelete  = (appID) => {

    if(window.confirm('Are you sure you want to delete? ')){
      axios.delete(`http://localhost:8080/application/delete${appID}`)
      .then(() =>{
        setData(data.filter(item => item.appID !== appID ));

        toast.success("Deleted successfull",{
          className: "toast-success",
          autoClose: 5000,

        });

      })
      .catch(error => console.error(error));
    }

  }
  
  return (
    <>
      <Header />
      <ToastContainer />
      <Navigation />
      <div className="main">
        <div className="content">
          <div className="usedFor">
            <h2>
              <i className="fa fa-list"></i> Application list
            </h2>
          </div>

          <div className="usedFors"></div>
          <div className="tables">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>CustomerPhone</th>
                  <th>Application Name</th>
                  <th> Date</th>
                  <th> Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.appID}>
                    <td>{item.appID}</td>
                    <td>{item.owner.ownerName}</td>
                    <td>{item.owner.phonenumber}</td>
                    <td>{item.appName}</td>
                    <td>{item.appDate}</td>
                    <td>{item.appStatus}</td>
                    <td>
                    <a href={`/applications/${item.appID}`}> <button className="button view">
                        <i className="fa fa-eye"></i>
                      </button></a>
                      <button className="button edit">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button className="button delete" onClick={() => handleDelete(item.appID)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerApplication;
