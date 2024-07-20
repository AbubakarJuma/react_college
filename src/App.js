import Dashboard from "./components/Customer/Dashboard";
import Navigation from "./components/Navigation";
import AddCustomer from "./components/Customer/AddCustomer";
import CustomerList from "./components/Customer/CustomerList";
import UpdateUser from "./components/Customer/UpdateUser";

import CustomerApplication from "./components/Customer/CustomerApplication";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/AddCustomer" element={<AddCustomer />} />
        <Route path="/Customer" element = {<CustomerList />} />
        <Route path="/application" element={<CustomerApplication />} />
        <Route path="/updateuser/:ownerID" element={<UpdateUser />} />
       
        <Route path="dashboard" element= {<Dashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
