import React, { useEffect, useState } from "react";
import './Styles/Navigation.css';
import './Styles/Responsive.css';



const Navigation = () =>{
    const [username,setUsername] = useState('');

    useEffect(() =>{
        const storename = localStorage.getItem('username');

        setUsername(storename);
    },[]);



    return(
        <div className="navigation">
            {/* <img src="./components/image/ngolo.jpg" style={{"width":"100px"}}></img> */}
            <h1 className="top"> </h1>
            <h3>Admin Navigation</h3>
            <p><a href="/dashboard"><i className="fa fa-dashboard"> </i> Dashboard</a></p>
            <p><a href="/customer"><i className="fa fa-list-ul"> </i> Customer List</a></p>
            <p><a href="/addcustomer"><i className="fa fa-user-plus"> </i> Add Customer</a></p>
         

            <p><a href="/"><i className="fa fa-sign-out"> </i> Logout</a></p>

            {/* <p className="logn-name" style={{"margin-top":"130px"}} ><span>Login as</span> {username}</p> */}

        </div>
    ); 
}

export default Navigation;