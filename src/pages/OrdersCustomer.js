// import React, { useState } from "react";
// import {
//     Box,
//     Card,
//     CardContent,
//     CardActions,
//     Typography,
//     Button,
//     Chip,
// } from "@mui/material";
// import OrderDetailsModal from "../components/customer/OrderDetailsModal"; // Importing the Modal component

// // Dummy data for orders
// const orders = [
//     {
//         id: "ORD001",
//         date: "2024-12-05",
//         total: 120.99,
//         items: [
//             { name: "Product 1", price: 40.33, quantity: 1 },
//             { name: "Product 2", price: 80.66, quantity: 2 },
//         ],
//         status: "Delivered",
//     },
//     {
//         id: "ORD002",
//         date: "2024-12-03",
//         total: 75.50,
//         items: [
//             { name: "Product 3", price: 25.25, quantity: 1 },
//             { name: "Product 4", price: 50.25, quantity: 1 },
//         ],
//         status: "Shipped",
//     },
//     {
//         id: "ORD003",
//         date: "2024-12-01",
//         total: 200.00,
//         items: [
//             { name: "Product 5", price: 100.00, quantity: 2 },
//         ],
//         status: "In Progress",
//     },
//     {
//         id: "ORD004",
//         date: "2024-12-01",
//         total: 200.00,
//         items: [
//             { name: "Product 5", price: 100.00, quantity: 2 },
//         ],
//         status: "Cancelled",
//     },
// ];

// const OrdersCustomer = () => {
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [openModal, setOpenModal] = useState(false);

//     const handleViewDetails = (order) => {
//         setSelectedOrder(order);
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setSelectedOrder(null);
//         setOpenModal(false);
//     };

//     return (
//         <Box
//             sx={{
//                 padding: "20px",
//                 height: "100vh",
//                 display: "grid",
//                 gridTemplateColumns: "1fr",
//                 rowGap: "20px",
//                 mt: 3
//             }}
//         >
//             {orders.map((order) => (
//                 <Card
//                     key={order.id}
//                     sx={{
//                         display: "flex", // Makes content horizontal
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         padding: "10px 15px",
//                         height:"80px",
//                         border: `1px solid #f06321`,
//                         borderRadius: 3,
//                         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                         transition: "transform 0.3s ease-in-out",
//                         "&:hover": {
//                             transform: "scale(1.01)",
//                         },
//                     }}
//                 >
//                     {/* Left Section: Order Details */}
//                     <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                         <Typography
//                             variant="body1"
//                             sx={{
//                                 fontWeight: "bold",
//                                 color: "#f06321",
//                                 marginRight: "20px",
//                             }}
//                         >
//                             {order.id}
//                         </Typography>
//                         <Typography sx={{ marginRight: "20px" }}>Total: ${order.total.toFixed(2)}</Typography>
//                         <Chip
//                             label={order.status}
//                             sx={{
//                                 backgroundColor:
//                                     order.status === "Delivered"
//                                         ? "green"
//                                         : order.status === "Shipped"
//                                             ? "orange"
//                                             : order.status === "Cancelled"
//                                                 ? "red"
//                                                 : "grey",
//                                 color: "white",
//                             }}
//                         />
//                     </Box>

//                     {/* Right Section: View Details Button */}
//                     <CardActions>
//                         <Typography sx={{ mr: 10 }} variant="body2" color="text.secondary"> {order.date}</Typography>

//                         <Button
//                             variant="outlined"
//                             sx={{
//                                 color: "#f06321",
//                                 borderColor: "#f06321",
//                                 "&:hover": { backgroundColor: "#d05b1c", },
//                             }}
//                             onClick={() => handleViewDetails(order)}
//                         >
//                             View Details
//                         </Button>
//                     </CardActions>
//                 </Card>
//             ))}

//             {/* Modal Component */}
//             {selectedOrder && (
//                 <OrderDetailsModal
//                     open={openModal}
//                     onClose={handleCloseModal}
//                     order={selectedOrder}
//                 />
//             )}
//         </Box>
//     );
// };

// export default OrdersCustomer;
import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
} from "@mui/material";
import OrderDetailsModal from "../components/customer/OrderDetailsModal"; // Importing the Modal component

// Dummy data for orders
const orders = [
    {
        id: "ORD001",
        date: "2024-12-05",
        total: 120.99,
        items: [
            { name: "Product 1", price: 40.33, quantity: 1 },
            { name: "Product 2", price: 80.66, quantity: 2 },
        ],
        status: "Delivered",
    },
    {
        id: "ORD002",
        date: "2024-12-03",
        total: 75.50,
        items: [
            { name: "Product 3", price: 25.25, quantity: 1 },
            { name: "Product 4", price: 50.25, quantity: 1 },
        ],
        status: "Shipped",
    },
    {
        id: "ORD003",
        date: "2024-12-01",
        total: 200.00,
        items: [
            { name: "Product 5", price: 100.00, quantity: 2 },
        ],
        status: "In Progress",
    },
    {
        id: "ORD004",
        date: "2024-12-01",
        total: 200.00,
        items: [
            { name: "Product 5", price: 100.00, quantity: 2 },
        ],
        status: "Cancelled",
    },
];

// Function to calculate the total number of items in an order
const calculateTotalItems = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
};

const OrdersCustomer = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedOrder(null);
        setOpenModal(false);
    };

    return (
        <Box
            sx={{
                padding: "20px",
                height: "100vh",
                display: "grid",
                gridTemplateColumns: "1fr",
                rowGap: "20px",
                mt: 3,
            }}
        >
            <Typography variant="h4" sx={{ color: '#f06321', textAlign: 'center', marginBottom: 2,fontWeight:'bold' }}>
                Your Orders</Typography>
                <Typography variant="h6" sx={{ color: '#f06321', textAlign: 'center', marginBottom: 2 }}>
               " Here you can view order details,
                check statuses, and stay updated
                with real-time order progress for a seamless experience."</Typography>

            {orders.map((order) => (
                <Card
                    key={order.id}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 15px",
                        height: "80px",
                        border: `1px solid #f06321`,
                        borderRadius: 3,
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.01)",
                        },
                    }}
                >
                    {/* Left Section: Order Details */}
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                color: "#f06321",
                                marginRight: "20px",
                            }}
                        >
                            {order.id}
                        </Typography>
                        <Typography sx={{ marginRight: "20px" }}>
                            Total Amount: ${order.total.toFixed(2)}
                        </Typography>
                       
                        <Chip
                            label={order.status}
                            sx={{
                                backgroundColor:
                                    order.status === "Delivered"
                                        ? "green"
                                        : order.status === "Shipped"
                                            ? "orange"
                                            : order.status === "Cancelled"
                                                ? "red"
                                                : "grey",
                                color: "white",
                            }}
                        />
                         <Typography sx={{ ml: "100px" }}>
                            Total items: {calculateTotalItems(order.items)} {/* Total items */}
                        </Typography>
                    </Box>

                    {/* Right Section: View Details Button */}
                    <CardActions>
                        <Typography sx={{ mr: 10 }} variant="body2" color="text.secondary">
                            {order.date}
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                color: "#f06321",
                                borderColor: "#f06321",
                                "&:hover": { backgroundColor: "#d05b1c" },
                            }}
                            onClick={() => handleViewDetails(order)}
                        >
                            View more
                        </Button>
                    </CardActions>
                </Card>
            ))}

            {/* Modal Component */}
            {selectedOrder && (
                <OrderDetailsModal
                    open={openModal}
                    onClose={handleCloseModal}
                    order={selectedOrder}
                />
            )}
        </Box>
    );
};

export default OrdersCustomer;
