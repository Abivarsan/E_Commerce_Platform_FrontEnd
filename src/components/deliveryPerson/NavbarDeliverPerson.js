import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarDelivery = () => {
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
            </Toolbar>
        </AppBar>
    );
};

export default NavbarDelivery;
