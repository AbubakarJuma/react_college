import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import "../Styles/Style.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {


  const [userCount, setUserCount] = useState("No Data");

  useEffect(() => {
    axios
      .get("http://localhost:8080/owner/all")
      .then((response) => {
        const users = response.data;
        const count = users.length;

        setUserCount(count);
      })

      .catch((error) => {
        console.error("kuna error", error);
      });
  }, []);

  const [appCount, setAppCount] = useState("No Data");

  useEffect(() => {
    axios
      .get("http://localhost:8080/application/all")
      .then((response) => {
        const apps = response.data;
        const counts = apps.length;

        setAppCount(counts);
      })
      .catch((error) => {
        console.log("Kuna Error", error);
      });
  }, []);


  // Approved Application Count

  const [approCount, setApproCount] = useState("No Data");

  useEffect(() => {
    axios.get("http://localhost:8080/application/all")
    .then((response) => {
    
      const filteredData = response.data.filter(item => item.appStatus === 'Active');
      const approCount = filteredData.length;

      setApproCount(approCount);
    })

    .catch((error) => {
      console.log("Kuna Error",error);
    });
  } )



  return (
    <>
      <Header />
      <Navigation />
      <ToastContainer />
      <div className="main">
        <div className="content">
          <div className="usedFor">
            <h2>
              <i className="fa fa-dashboard"></i> Main Dashboard
            </h2>
          </div>

          <div className="usedForr">
            <div className="used">
              <p>Total Customer</p>
              <span>{userCount}</span>
            </div>
            <div className="useds">
              <p>Total Application</p>
              <span>{appCount}</span>
            </div>
            <div className="usedss">
              <p>Total Approved</p>
              <span>{approCount}</span>
            </div>
            <div className="usedsss">
              <p>Total Canceled</p>
              <span>45</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
