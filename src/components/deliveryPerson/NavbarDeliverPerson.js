import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavbarDelivery = () => {

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
                    to="/my-orders"
                    sx={{ marginLeft: 2, fontWeight: 'bold', color: 'white' }}
                >
                    My Orders
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

export default NavbarDelivery;
