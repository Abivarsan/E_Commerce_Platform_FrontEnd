// import React, { useState } from 'react';
// import { Drawer, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
// import AlertBox from '../common/AlertBox'; 

// const CartDrawer = ({ openCart, toggleCart }) => {
//     // Sample data for cart items
//     const cartItems = [
//         {
//             id: 1,
//             name: 'Product 1',
//             image: 'https://via.placeholder.com/50',
//             price: 20.00,

//         },
//         {
//             id: 2,
//             name: 'Product 2',
//             image: 'https://via.placeholder.com/50',
//             price: 30.00,

//         },
//     ];

//     // Calculate subtotal and total
//     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const shipping = 5.00; // Example shipping fee
//     const taxes = subtotal * 0.1; // Example tax (10%)
//     const discount = 10.00; // Example discount

//     const grandTotal = subtotal + shipping + taxes - discount;

//     // State for the dialog visibility
//     const [openDialog, setOpenDialog] = useState(false);

//     // Handlers for dialog actions
//     const handleDialogClose = () => {
//         setOpenDialog(false);
//     };

//     const handleConfirmCheckout = () => {
//         // Proceed with the checkout logic here (e.g., redirect to payment page)
//         alert('Proceeding to checkout...');
//         setOpenDialog(false); // Close dialog after confirming
//     };

//     return (
//         <Drawer
//             anchor="right"
//             open={openCart}
//             onClose={toggleCart}
//             sx={{
//                 '& .MuiDrawer-paper': {
//                     width: '400px',
//                     padding: 2,
//                 },
//             }}
//         >
//             <Typography variant="h6" sx={{ color: "#f06321", textAlign: "center", marginBottom: 2 }}>
//                 My Cart
//             </Typography>

//             {/* Cart Items List */}
//             <List>
//                 {cartItems.map(item => (
//                     <ListItem key={item.id}>
//                         <img src={item.image} alt={item.name} width={50} height={50} style={{ marginRight: 10 }} />
//                         <ListItemText
//                             primary={item.name}
//                         />
//                     </ListItem>
//                 ))}
//             </List>

//             <Divider sx={{ marginY: 2 }} />

//             {/* Cart Totals */}
//             <Typography sx={{ fontWeight: 'bold' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
//             <Typography>Shipping: ${shipping.toFixed(2)}</Typography>
//             <Typography>Taxes: ${taxes.toFixed(2)}</Typography>
//             <Typography>Discount: -${discount.toFixed(2)}</Typography>

//             <Divider sx={{ marginY: 2 }} />

//             {/* Grand Total */}
//             <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
//                 Total: ${grandTotal.toFixed(2)}
//             </Typography>

//             {/* Cart Actions */}
//             <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                     marginTop: 2,
//                     backgroundColor: '#f06321',
//                     '&:hover': { backgroundColor: '#d05b1c' }
//                 }}
//                 onClick={() => setOpenDialog(true)} // Open confirmation dialog
//             >
//                 Checkout
//             </Button>
//             <Button
//                 fullWidth
//                 variant="outlined"
//                 sx={{ marginTop: 1, borderColor: '#f06321',color:'#f06321' }}
//                 onClick={toggleCart}
//             >
//                 Close
//             </Button>

//             {/* AlertBox Confirmation Dialog */}
//             <AlertBox
//                 open={openDialog}
//                 title="Confirm Checkout"
//                 message="Are you sure you want to proceed to checkout?"
//                 onClose={handleDialogClose}
//                 onAgree={handleConfirmCheckout}
//             />
//         </Drawer>
//     );
// };

// export default CartDrawer;


import React, { useState } from 'react';
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
    Divider,
    IconButton,
    Box
} from '@mui/material';
import AlertBox from '../common/AlertBox';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartDrawer = ({ openCart, toggleCart }) => {
    // Sample data for cart items with initial quantities
    const initialCartItems = [
        {
            id: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/50',
            price: 20.0,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/50',
            price: 30.0,
            quantity: 1,
        },
    ];

    // State for cart items
    const [cartItems, setCartItems] = useState(initialCartItems);

    // State for the dialog visibility
    const [openDialog, setOpenDialog] = useState(false);

    // Handlers for dialog actions
    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleConfirmCheckout = () => {
        setOpenDialog(false); // Close dialog after confirming
    };

    // Handlers to update quantity
    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Calculate totals
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 5.0; // Example shipping fee
    const taxes = subtotal * 0.1; // Example tax (10%)
    const discount = 10.0; // Example discount
    const grandTotal = subtotal + shipping + taxes - discount;

    return (
        <Drawer
            anchor="right"
            open={openCart}
            onClose={toggleCart}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '400px',
                    padding: 2,
                },
            }}
        >
            <Typography variant="h6" sx={{ color: '#f06321', textAlign: 'center', marginBottom: 2 }}>
                My Cart
            </Typography>

            {/* Cart Items List */}
            <List>
                {cartItems.map((item) => (
                    <ListItem key={item.id} sx={{ alignItems: 'flex-start' }}>
                        <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{ width: 50, height: 50, marginRight: 2, borderRadius: '4px' }}
                        />
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <Typography>
                                    Price: ${item.price.toFixed(2)} x {item.quantity}
                                </Typography>
                            }
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <IconButton
                                size="small"
                                onClick={() => handleDecreaseQuantity(item.id)}
                                sx={{ color: '#f06321' }}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Typography sx={{ marginY: 1 }}>{item.quantity}</Typography>

                            <IconButton
                                size="small"
                                onClick={() => handleIncreaseQuantity(item.id)}
                                sx={{ color: '#f06321' }}
                            >
                                <AddIcon />
                            </IconButton>
                            
                            
                        </Box>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />

            {/* Cart Totals */}
            <Typography sx={{ fontWeight: 'bold' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
            <Typography>Shipping: ${shipping.toFixed(2)}</Typography>
            <Typography>Taxes: ${taxes.toFixed(2)}</Typography>
            <Typography>Discount: -${discount.toFixed(2)}</Typography>

            <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />

            {/* Grand Total */}
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                Total: ${grandTotal.toFixed(2)}
            </Typography>

            {/* Cart Actions */}
            <Button
                fullWidth
                variant="contained"
                sx={{
                    marginTop: 2,
                    backgroundColor: '#f06321',
                    '&:hover': { backgroundColor: '#d05b1c' },
                }}
                onClick={() => setOpenDialog(true)} // Open confirmation dialog
            >
                Checkout
            </Button>
            <Button
                fullWidth
                variant="outlined"
                sx={{ marginTop: 1, borderColor: '#f06321', color: '#f06321' }}
                onClick={toggleCart}
            >
                Close
            </Button>

            {/* AlertBox Confirmation Dialog */}
            <AlertBox
                open={openDialog}
                title="Confirm Checkout"
                message="Are you sure you want to proceed to checkout?"
                onClose={handleDialogClose}
                onAgree={handleConfirmCheckout}
            />
        </Drawer>
    );
};

export default CartDrawer;
