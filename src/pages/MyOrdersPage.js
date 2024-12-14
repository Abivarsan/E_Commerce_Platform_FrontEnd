// MyOrdersPage.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import axios from "axios"; // Axios for backend integration

function MyOrdersPage() {
  const [myOrders, setMyOrders] = useState([]);

  // Fetch accepted orders from the backend
  useEffect(() => {
    axios
      .get(`http://10.10.27.17:8086/api/delivery/courier/3`)
      .then((response) => {
        setMyOrders(response.data);
      })
      .catch((error) => console.error("Error fetching my orders:", error));
  }, []);

  // Handle Complete Order
  const handleCompleteOrder = (orderNumber) => {
    axios
      .post(`http://10.10.27.17:8086/api/delivery/complete`, { orderNumber })
      .then(() => {
        alert(`Order ${orderNumber} marked as completed!`);
        setMyOrders((prevOrders) =>
          prevOrders.filter((order) => order.orderNumber !== orderNumber)
        );
      })
      .catch((error) => console.error("Error completing order:", error));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#f06321" }}>
        My Orders
      </Typography>

      {Array.isArray(myOrders) && myOrders.map((order) => (
  <Card key={order.orderNumber}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#e5f7ff",
            border: `1px solid #2196f3`,
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ color: "#2196f3", fontWeight: "bold" }}
            >
              Order #{order.orderNumber}
            </Typography>
            <Chip label={order.orderStatus} color="secondary" sx={{ mt: 1 }} />
          </CardContent>

          <CardContent sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2196f3",
                color: "#fff",
                "&:hover": { backgroundColor: "#1976d2" },
              }}
              onClick={() => handleCompleteOrder(order.orderNumber)}
            >
              Complete Order
            </Button>
          </CardContent>
        </Card>
      ))}

      {myOrders.length === 0 && (
        <Typography variant="h6" color="textSecondary" textAlign="center">
          No active orders.
        </Typography>
      )}
    </Box>
  );
}

export default MyOrdersPage;