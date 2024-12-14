import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
//add logout function

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        navigate("/");
        window.location.reload();
    };
    const navigate = useNavigate();
    return (
        <AppBar position="static" sx={{ backgroundColor: '#f06321' }}>
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
                <Button 
                    color="inherit" 
                    component={Link} 
                    to="/" 
                    sx={{ marginLeft: 2, fontWeight: 'bold', color: 'white' }}
                >
                    Home
                </Button>
                <Button 
                    color="inherit" 
                    component={Link} 
                    to="/all-users" 
                    sx={{ marginLeft: 2, fontWeight: 'bold', color: 'white' }}
                >
                    Users
                </Button>
                <Button 
                    color="inherit" 
                    component={Link} 
                    to="/all-products" 
                    sx={{ marginLeft: 2, fontWeight: 'bold', color: 'white' }}
                >
                    Products
                </Button>
                <Button 
                    color="inherit" 
                    onClick={handleLogout} 
                    sx={{ marginLeft: 2, fontWeight: 'bold', color: 'white' }}
                    
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavbarAdmin;
