// NavbarCustomer.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer'; // Import CartDrawer

const NavbarCustomer = () => {
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        setOpenCart(!openCart);
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#f06321' }}>
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{ marginRight: 2, fontWeight: 'bold', color: 'white' }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/orders"
                        sx={{ marginRight: 2, fontWeight: 'bold', color: 'white' }}
                    >
                        Orders
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/products"
                        sx={{ marginRight: 2, fontWeight: 'bold', color: 'white' }}
                    >
                        Products
                    </Button>
                    <Button
                        color="inherit"
                        onClick={toggleCart}
                        sx={{ fontWeight: 'bold', color: 'white' }}
                    >
                        My Cart
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Use the CartDrawer component */}
            <CartDrawer openCart={openCart} toggleCart={toggleCart} />
        </div>
    );
};

export default NavbarCustomer;
