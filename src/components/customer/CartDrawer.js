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


// import React, { useState } from 'react';
// import {
//     Drawer,
//     Typography,
//     List,
//     ListItem,
//     ListItemText,
//     Button,
//     Divider,
//     IconButton,
//     Box
// } from '@mui/material';
// import AlertBox from '../common/AlertBox';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const CartDrawer = ({ openCart, toggleCart }) => {
//     // Sample data for cart items with initial quantities
//     const initialCartItems = [
//         {
//             id: 1,
//             name: 'Product 1',
//             image: 'https://via.placeholder.com/50',
//             price: 20.0,
//             quantity: 1,
//         },
//         {
//             id: 2,
//             name: 'Product 2',
//             image: 'https://via.placeholder.com/50',
//             price: 30.0,
//             quantity: 1,
//         },
//     ];

//     // State for cart items
//     const [cartItems, setCartItems] = useState(initialCartItems);

//     // State for the dialog visibility
//     const [openDialog, setOpenDialog] = useState(false);

//     // Handlers for dialog actions
//     const handleDialogClose = () => {
//         setOpenDialog(false);
//     };

//     const handleConfirmCheckout = () => {
//         setOpenDialog(false); // Close dialog after confirming
//     };

//     // Handlers to update quantity
//     const handleIncreaseQuantity = (id) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );
//     };

//     const handleDecreaseQuantity = (id) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id && item.quantity > 1
//                     ? { ...item, quantity: item.quantity - 1 }
//                     : item
//             )
//         );
//     };

//     // Calculate totals
//     const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const shipping = 5.0; // Example shipping fee
//     const taxes = subtotal * 0.1; // Example tax (10%)
//     const discount = 10.0; // Example discount
//     const grandTotal = subtotal + shipping + taxes - discount;

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
//             <Typography variant="h6" sx={{ color: '#f06321', textAlign: 'center', marginBottom: 2 }}>
//                 My Cart
//             </Typography>

//             {/* Cart Items List */}
//             <List>
//                 {cartItems.map((item) => (
//                     <ListItem key={item.id} sx={{ alignItems: 'flex-start' }}>
//                         <Box
//                             component="img"
//                             src={item.image}
//                             alt={item.name}
//                             sx={{ width: 50, height: 50, marginRight: 2, borderRadius: '4px' }}
//                         />
//                         <ListItemText
//                             primary={item.name}
//                             secondary={
//                                 <Typography>
//                                     Price: ${item.price.toFixed(2)} x {item.quantity}
//                                 </Typography>
//                             }
//                         />
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'space-between',
//                             }}
//                         >
//                             <IconButton
//                                 size="small"
//                                 onClick={() => handleDecreaseQuantity(item.id)}
//                                 sx={{ color: '#f06321' }}
//                             >
//                                 <RemoveIcon />
//                             </IconButton>
//                             <Typography sx={{ marginY: 1 }}>{item.quantity}</Typography>

//                             <IconButton
//                                 size="small"
//                                 onClick={() => handleIncreaseQuantity(item.id)}
//                                 sx={{ color: '#f06321' }}
//                             >
//                                 <AddIcon />
//                             </IconButton>
                            
                            
//                         </Box>
//                     </ListItem>
//                 ))}
//             </List>

//             <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />

//             {/* Cart Totals */}
//             <Typography sx={{ fontWeight: 'bold' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
//             <Typography>Shipping: ${shipping.toFixed(2)}</Typography>
//             <Typography>Taxes: ${taxes.toFixed(2)}</Typography>
//             <Typography>Discount: -${discount.toFixed(2)}</Typography>

//             <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />

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
//                     '&:hover': { backgroundColor: '#d05b1c' },
//                 }}
//                 onClick={() => setOpenDialog(true)} // Open confirmation dialog
//             >
//                 Checkout
//             </Button>
//             <Button
//                 fullWidth
//                 variant="outlined"
//                 sx={{ marginTop: 1, borderColor: '#f06321', color: '#f06321' }}
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

// import React, { useState, useEffect } from 'react';
// import {
//     Drawer,
//     Typography,
//     List,
//     ListItem,
//     ListItemText,
//     Button,
//     Divider,
//     IconButton,
//     Box,
// } from '@mui/material';
// import axios from 'axios';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { loadStripe } from '@stripe/stripe-js';

// const CartDrawer = ({ openCart, toggleCart, userName }) => {
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM'); // Replace with actual key

//     useEffect(() => {
//         if (openCart) {
//             fetchCartDetails();
//         }
//     }, [openCart]);

//     const fetchCartDetails = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axios.get(`http://10.10.27.17:8082/api/user/cart/Abi`);
//             const items = data.cartItems || [];

//             const updatedItems = await Promise.all(
//                 items.map(async (item) => {
//                     try {
//                         const { data: product } = await axios.get(`http://10.10.27.17:8081/api/product/${item.skuCode}`);
//                         return {
//                             ...item,
//                             name: product.name,
//                             price: product.price,
//                         };
//                     } catch (error) {
//                         console.error(`Failed to fetch product details for SKU: ${item.skuCode}`, error);
//                         return item;
//                     }
//                 })
//             );

//             setCartItems(updatedItems);
//         } catch (error) {
//             console.error('Failed to fetch cart details', error);
//             setCartItems([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleIncreaseQuantity = (skuCode) => {
//         const item = cartItems.find((i) => i.skuCode === skuCode);
//         if (item) updateCartItemQuantity(skuCode, item.quantity + 1);
//     };

//     const handleDecreaseQuantity = (skuCode) => {
//         const item = cartItems.find((i) => i.skuCode === skuCode);
//         if (item && item.quantity > 1) updateCartItemQuantity(skuCode, item.quantity - 1);
//     };

//     const updateCartItemQuantity = (skuCode, newQuantity) => {
//         axios
//             .put('http://10.10.27.17:8082/api/user/cart/update', {
//                 userName,
//                 skuCode,
//                 qty: newQuantity,
//             })
//             .then((response) => setCartItems(response.data.cartItems || []))
//             .catch(console.error);
//     };

//     const handleDeleteItem = (skuCode) => {
//         axios
//             .put(`http://10.10.27.17:8082/api/user/cart/Abi/remove/${skuCode}`)
//             .then((response) => setCartItems(response.data.cartItems || []))
//             .catch(console.error);
//     };

//     const handleCheckout = async () => {
//         try {
//             const { data } = await axios.get('http://10.10.27.17:8084/checkout');
//             const stripe = await stripePromise;
//             await stripe.redirectToCheckout({
//                 lineItems: cartItems.map((item) => ({
//                     price_data: {
//                         currency: data.currency,
//                         product_data: {
//                             name: item.name,
//                         },
//                         unit_amount: item.price * 100, // Convert to cents
//                     },
//                     quantity: item.quantity,
//                 })),
//                 mode: 'payment',
//                 successUrl: 'http://localhost:3000/success',
//                 cancelUrl: 'http://localhost:3000/cancel',
//             });
//         } catch (error) {
//             console.error('Failed to initiate checkout:', error);
//         }
//     };

//     const subtotal = cartItems.reduce(
//         (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
//         0
//     );

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
//             <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>
//                 My Cart
//             </Typography>

//             {loading ? (
//                 <Typography sx={{ textAlign: 'center' }}>Loading...</Typography>
//             ) : (
//                 <List>
//                     {cartItems.map((item) => (
//                         <ListItem key={item.skuCode}>
//                             <Box
//                                 component="img"
//                                 src={item.image || 'https://via.placeholder.com/50'}
//                                 alt={item.name || 'Product'}
//                                 sx={{ width: 50, height: 50, marginRight: 2 }}
//                             />
//                             <ListItemText
//                                 primary={item.name || 'Unknown Product'}
//                                 secondary={`$${item.price?.toFixed(2) || '0.00'} x ${
//                                     item.quantity || 0
//                                 }`}
//                             />
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <IconButton onClick={() => handleDecreaseQuantity(item.skuCode)}>
//                                     <RemoveIcon />
//                                 </IconButton>
//                                 <Typography>{item.quantity || 0}</Typography>
//                                 <IconButton onClick={() => handleIncreaseQuantity(item.skuCode)}>
//                                     <AddIcon />
//                                 </IconButton>
//                                 <IconButton onClick={() => handleDeleteItem(item.skuCode)}>
//                                     <DeleteIcon />
//                                 </IconButton>
//                             </Box>
//                         </ListItem>
//                     ))}
//                 </List>
//             )}

//             <Divider sx={{ marginBottom: 2 }} />
//             <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
//             <Button
//                 fullWidth
//                 variant="contained"
//                 onClick={handleCheckout}
//                 sx={{ marginTop: 2 }}
//             >
//                 Checkout
//             </Button>
//             <Button
//                 fullWidth
//                 variant="outlined"
//                 onClick={toggleCart}
//                 sx={{ marginTop: 1 }}
//             >
//                 Close
//             </Button>
//         </Drawer>
//     );
// };

// export default CartDrawer;

import React, { useState, useEffect } from 'react';
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
    Divider,
    Box,
    TextField,
} from '@mui/material';
import AlertBox from '../common/AlertBox';
import axios from 'axios';

const CartDrawer = ({ openCart, toggleCart, userName }) => {
    const [cartItems, setCartItems] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (openCart) {
            fetchCartDetails();
        }
    }, [openCart]);

    const fetchCartDetails = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`http://10.10.27.17:8082/api/user/cart/Abi`);
            const items = data.cartItems || [];

            const updatedItems = await Promise.all(
                items.map(async (item) => {
                    try {
                        const { data: product } = await axios.get(`http://10.10.27.17:8081/api/product/${item.skuCode}`);
                        return {
                            ...item,
                            name: product.name,
                            price: product.price,
                        };
                    } catch (error) {
                        console.error(`Failed to fetch product details for SKU: ${item.skuCode}`, error);
                        return item;
                    }
                })
            );

            setCartItems(updatedItems);
        } catch (error) {
            console.error('Failed to fetch cart details', error);
            setCartItems([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDialogClose = () => setOpenDialog(false);

    const handleConfirmCheckout = async () => {
        setOpenDialog(false);

        try {
            const response = await axios.get('http://10.10.27.17:8084/checkout');
            const { amount, stripePublicKey, currency } = response.data;

            const stripe = window.Stripe(stripePublicKey);
            const elements = stripe.elements();
            const cardElement = elements.create('card');
            cardElement.mount('#card-element');

            const { error, paymentIntent } = await stripe.confirmCardPayment(stripePublicKey, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (error) {
                console.error('Payment failed:', error);
            } else {
                console.log('Payment succeeded:', paymentIntent);

                const completeRequestDto = {
                    chargeRequest: {
                        description: 'Order description',
                        amount: amount,
                        currency: currency,
                        stripeEmail: 'ketheeswaranabivarsan@gmail.com', // Replace with user email
                        stripeToken: paymentIntent.id,
                    },
                    inventoryUpdateRequest: {
                        orderID: 123, // Replace with actual order ID
                        inventoryRequests: cartItems.map((item) => ({
                            skuCode: item.skuCode,
                            quantity: item.quantity,
                        })),
                    },
                };

                await axios.post('/complete-order', completeRequestDto);
                window.location.href = '/customer-product';
            }
        } catch (err) {
            console.error('Error during checkout:', err);
        }
    };

    const updateCartItemQuantity = (skuCode, quantity) => {
        axios.put(`http://10.10.27.17:8082/api/user/cart/update`, {
            userName,
            skuCode,
            qty: quantity,
        })
            .then((response) => setCartItems(response.data.cartItems || []))
            .catch(console.error);
    };

    const handleDeleteItem = (skuCode) => {
        axios.put(`http://10.10.27.17:8082/api/user/cart/Abi/remove/${skuCode}`)
            .then((response) => setCartItems(response.data.cartItems || []))
            .catch(console.error);
    };

    const handleClearCart = () => {
        axios.delete(`http://10.10.27.17:8082/api/user/cart/Abi/clear`)
            .then(() => setCartItems([]))
            .catch(console.error);
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
        0
    );
    const shipping = 5.0;
    const taxes = subtotal * 0.1;
    const discount = 10.0;
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

            {loading ? (
                <Typography sx={{ textAlign: 'center', marginTop: 2 }}>Loading...</Typography>
            ) : (
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.skuCode} sx={{ alignItems: 'flex-start' }}>
                            <Box
                                component="img"
                                src={item.image || 'https://via.placeholder.com/50'}
                                alt={item.name || 'Product'}
                                sx={{ width: 50, height: 50, marginRight: 2, borderRadius: '4px' }}
                            />
                            <ListItemText
                                primary={item.name || 'Unknown Product'}
                                secondary={
                                    <Typography>
                                        Price: ${item.price?.toFixed(2) || '0.00'} x {item.quantity || 0}
                                    </Typography>
                                }
                            />
                            <TextField
                                type="number"
                                value={item.quantity || 0}
                                onChange={(e) =>
                                    updateCartItemQuantity(item.skuCode, parseInt(e.target.value, 10))
                                }
                                size="small"
                                sx={{ width: 60, marginRight: 1 }}
                            />
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => updateCartItemQuantity(item.skuCode, item.quantity)}
                                sx={{ backgroundColor: '#f06321', color: 'white' }}
                            >
                                Update
                            </Button>
                            <Button
                                variant="text"
                                color="error"
                                size="small"
                                onClick={() => handleDeleteItem(item.skuCode)}
                            >
                                Delete
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}

            <Divider sx={{ marginBottom: 2, borderColor: '#f06321' }} />

            <Typography sx={{ fontWeight: 'bold' }}>Subtotal: ${subtotal.toFixed(2)}</Typography>
            <Typography>Shipping: ${shipping.toFixed(2)}</Typography>
            <Typography>Taxes: ${taxes.toFixed(2)}</Typography>
            <Typography>Discount: -${discount.toFixed(2)}</Typography>

            <Divider sx={{ marginBottom: 2, borderColor: '#f06321' }} />

            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
                Total: ${grandTotal.toFixed(2)}
            </Typography>

            <div id="card-element" style={{ margin: '20px 0' }}></div>

            <Button
                fullWidth
                variant="contained"
                sx={{
                    marginTop: 2,
                    backgroundColor: '#f06321',
                    '&:hover': { backgroundColor: '#d05b1c' },
                }}
                onClick={() => setOpenDialog(true)}
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
            <Button
                fullWidth
                variant="outlined"
                sx={{
                    marginTop: 1,
                    borderColor: '#d32f2f',
                    color: '#d32f2f',
                }}
                onClick={handleClearCart}
            >
                Clear Cart
            </Button>

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
