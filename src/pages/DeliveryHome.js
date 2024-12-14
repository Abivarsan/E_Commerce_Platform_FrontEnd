// import React from 'react';

// function DeliveryHome() {
//   return (
//     <div>
//       <h1>Welcome, Delivery Person!</h1>
//       <p>View your delivery tasks, update statuses, and track orders.</p>
//     </div>
//   );
// }

// export default DeliveryHome;
// //Okay in my customer home page im going to show product details  as a Card by category wise So  for each 

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { format } from "date-fns"; // For formatting timestamp

// Dummy Data for Available Orders
const availableOrders = [
  {
    userName: "John Doe",
    orderNumber: "ORD12345",
    productInfoList: [
      { productName: "Wireless Headphones", quantity: 1 },
      { productName: "Smartphone", quantity: 2 },
    ],
    timestamp: new Date("2024-12-05T10:30:00"),
    trackingStatus: "Pending",
  },
  {
    userName: "Jane Smith",
    orderNumber: "ORD67890",
    productInfoList: [
      { productName: "Laptop", quantity: 1 },
      { productName: "Mouse", quantity: 1 },
    ],
    timestamp: new Date("2024-12-06T14:45:00"),
    trackingStatus: "Pending",
  },
];

function DeliveryHome() {
  const [orders, setOrders] = useState(availableOrders);

  // Handle Accept Order
  const handleAcceptOrder = (orderNumber) => {
    alert(`Order ${orderNumber} accepted!`);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderNumber !== orderNumber)
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{color:"#f06321"}}>
        Available Orders
      </Typography>

      {orders.map((order) => (
        <Card
          key={order.orderNumber}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#fff2e5",
            border: `1px solid #f06321`,
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          {/* Left Section */}
          <CardContent sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: "#f06321", fontWeight: "bold" }}
            >
              Order #{order.orderNumber}
            </Typography>
            <Typography variant="body1">
              Customer: {order.userName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Placed on: {format(order.timestamp, "yyyy-MM-dd HH:mm")}
            </Typography>
            <Chip label={order.trackingStatus} color="textSecondary" sx={{ mt: 1 }} />

          </CardContent>

          {/* Middle Section: Product Info */}
          <CardContent sx={{ flex: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Products:
            </Typography>
            <List dense>
              {order.productInfoList.map((product, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText
                    primary={`${product.productName} (x${product.quantity})`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>

          {/* Right Section: Action */}
          <CardContent sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f06321",
                color: "#fff",
                "&:hover": { backgroundColor: "#d05b1c" },
              }}
              onClick={() => handleAcceptOrder(order.orderNumber)}
            >
              Accept Order
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Divider */}
      {orders.length === 0 && (
        <Typography variant="h6" color="textSecondary" textAlign="center">
          No available orders.
        </Typography>
      )}
    </Box>
  );
}

export default DeliveryHome;
