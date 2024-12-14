
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import "react-toastify/dist/ReactToastify.css";
// import NavbarCustomer from './components/customer/NavbarCustomer';
// import NavbarAdmin from './components/admin/NavbarAdmin';
// import NavbarDelivery from './components/deliveryPerson/NavbarDeliverPerson';
// import CustomerHome from './pages/CustomerHome';
// import AdminHome from './pages/AdminHome';
// import DeliveryHome from './pages/DeliveryHome';
// import CustomerProduct from './pages/CustomerProduct';
// import OrderCustomer from './pages/OrdersCustomer';
// import "./App.css";


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 
// import AdminCustomer from './pages/AdminCustomer';
// import AdminProductPage from './pages/AdminProductPage';
// import LoginPage from './pages/SigninPage';


// function App() {
//   const [userRole, setUserRole] = useState('Admin'); 

//   const renderNavbar = () => {
//     if (userRole === 'Admin') {
//       return <NavbarAdmin />;
//     } else if (userRole === 'DeliverPerson') {
//       return <NavbarDelivery />;
//     } else {
//       return <NavbarCustomer />;
//     }
//   };

//   const renderHomeRedirect = () => {
//     if (userRole === 'Admin') {
//       return <Navigate to="/admin" />;
//     } else if (userRole === 'DeliverPerson') {
//       return <Navigate to="/delivery" />;
//     } else {
//       return <Navigate to="/customer" />;
//     }
//   };

//   return (
//     <Router>
//       {renderNavbar()}
//       <Routes>
//         {/* Redirect root path to user-specific homepage */}
//         <Route path="/" element={<LoginPage/>}/>
//         {/* <Route path="/" element={renderHomeRedirect()} /> */}

//         {/* User-specific routes */}
//         <Route path="/admin" element={<AdminHome />} />
//         <Route path="/delivery" element={<DeliveryHome />} />
//         <Route path="/customer" element={<CustomerHome />} />
//         <Route path="/products" element={<CustomerProduct/>}/>
//         <Route path="/orders" element={<OrderCustomer/>}/>  
//         <Route path="/all-users" element={<AdminCustomer/>} />
//         <Route path="/all-products" element={<AdminProductPage/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import NavbarCustomer from "./components/customer/NavbarCustomer";
// import NavbarAdmin from "./components/admin/NavbarAdmin";
// import NavbarDelivery from "./components/deliveryPerson/NavbarDeliverPerson";
// import CustomerHome from "./pages/CustomerHome";
// import AdminHome from "./pages/AdminHome";
// import DeliveryHome from "./pages/DeliveryHome";
// import CustomerProduct from "./pages/CustomerProduct";
// import OrderCustomer from "./pages/OrdersCustomer";
// import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AdminCustomer from "./pages/AdminCustomer";
// import AdminProductPage from "./pages/AdminProductPage";
// import LoginPage from "./pages/SigninPage";
// import RegistrationPage from "./pages/RegistrationPage";
// import ForgetPasswordPage from "./pages/ForgetPage";

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     // Retrieve the user role from localStorage
//     const role = localStorage.getItem("userRole");
//     setUserRole(role);
//   }, []);

//   const renderNavbar = () => {
//     if (userRole === "Admin") {
//       return <NavbarAdmin />;
//     } else if (userRole === "Delivery") {
//       return <NavbarDelivery />;
//     } else if (userRole === "Customer") {
//       return <NavbarCustomer />;
//     } else {
//       return null; // No navbar if role is not set or invalid
//     }
//   };

//   const renderHomeRedirect = () => {
//     if (userRole === "Admin") {
//       return <Navigate to="/admin" />;
//     } else if (userRole === "Delivery") {
//       return <Navigate to="/delivery" />;
//     } else if (userRole === "Customer") {
//       return <Navigate to="/customer" />;
//     } else {
//       return <Navigate to="/" />; // Redirect to login if no role
//     }
//   };

//   return (
//     <Router>
//       {renderNavbar()}
//       <Routes>
//         {/* Login page route */}
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegistrationPage/>}/>
//         <Route path="/fogot-password" element={<ForgetPasswordPage/>}/>

//         {/* Redirect to user-specific homepage based on role */}
//         {userRole && <Route path="/" element={renderHomeRedirect()} />}

//         {/* User-specific routes */}
//         <Route path="/admin" element={<AdminHome />} />
//         <Route path="/delivery" element={<DeliveryHome />} />
//         <Route path="/customer" element={<CustomerHome />} />
//         <Route path="/products" element={<CustomerProduct />} />
//         <Route path="/orders" element={<OrderCustomer />} />
//         <Route path="/all-users" element={<AdminCustomer />} />
//         <Route path="/all-products" element={<AdminProductPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavbarCustomer from "./components/customer/NavbarCustomer";
import NavbarAdmin from "./components/admin/NavbarAdmin";
import NavbarDelivery from "./components/deliveryPerson/NavbarDeliverPerson";
import CustomerHome from "./pages/CustomerHome";
import AdminHome from "./pages/AdminHome";
import DeliveryHome from "./pages/DeliveryHome";
import CustomerProduct from "./pages/CustomerProduct";
import OrderCustomer from "./pages/OrdersCustomer";
import AdminCustomer from "./pages/AdminCustomer";
import AdminProductPage from "./pages/AdminProductPage";
import LoginPage from "./pages/SigninPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgetPasswordPage from "./pages/ForgetPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));


  const renderNavbar = () => {
    switch (userRole) {
      case "Admin":
        return <NavbarAdmin />;
      case "Delivery":
        return <NavbarDelivery />;
      case "Customer":
        return <NavbarCustomer />;
      default:
        return null;
    }
  };

  return (
    <>
    <Router>
      {renderNavbar()}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={userRole ? <Navigate to={`/${userRole.toLowerCase()}`} /> : <LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />

        {/* Role-Based Private Routes */}
        {userRole === "Admin" && <Route path="/admin" element={<AdminHome />} />}
        {userRole === "Delivery" && <Route path="/delivery" element={<DeliveryHome />} />}
        {userRole === "Customer" && (
          <>
            <Route path="/customer" element={<CustomerHome />} />
            <Route path="/products" element={<CustomerProduct />} />
            <Route path="/orders" element={<OrderCustomer />} />
          </>
        )}
        {/* Admin-Specific Routes */}
        <Route path="/all-users" element={userRole === "Admin" ? <AdminCustomer /> : <Navigate to="/" />} />
        <Route path="/all-products" element={userRole === "Admin" ? <AdminProductPage /> : <Navigate to="/" />} />


      </Routes>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
      </>
  );
}

export default App;
