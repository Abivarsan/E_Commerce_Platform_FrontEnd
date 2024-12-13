import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarCustomer from './components/customer/NavbarCustomer';
import NavbarAdmin from './components/admin/NavbarAdmin';
import NavbarDelivery from './components/deliveryPerson/NavbarDeliverPerson';
import CustomerHome from './pages/CustomerHome';
import AdminHome from './pages/AdminHome';
import DeliveryHome from './pages/DeliveryHome';
import CustomerProduct from './pages/CustomerProduct';
import OrderCustomer from './pages/OrdersCustomer';
import "./App.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import AdminCustomer from './pages/AdminCustomer';
import AdminProductPage from './pages/AdminProductPage';


function App() {
  const [userRole, setUserRole] = useState('Admin'); 

  const renderNavbar = () => {
    if (userRole === 'Admin') {
      return <NavbarAdmin />;
    } else if (userRole === 'DeliverPerson') {
      return <NavbarDelivery />;
    } else {
      return <NavbarCustomer />;
    }
  };

  const renderHomeRedirect = () => {
    if (userRole === 'Admin') {
      return <Navigate to="/admin" />;
    } else if (userRole === 'DeliverPerson') {
      return <Navigate to="/delivery" />;
    } else {
      return <Navigate to="/customer" />;
    }
  };

  return (
    <Router>
      {renderNavbar()}
      <Routes>
        {/* Redirect root path to user-specific homepage */}
        <Route path="/" element={renderHomeRedirect()} />

        {/* User-specific routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/delivery" element={<DeliveryHome />} />
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/products" element={<CustomerProduct/>}/>
        <Route path="/orders" element={<OrderCustomer/>}/>  
        <Route path="/all-users" element={<AdminCustomer/>} />
        <Route path="/all-products" element={<AdminProductPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
