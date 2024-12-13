import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Countup from "react-countup";


// Mock data
const dashboardStats = [
  { title: "Total Users", value: 1500, color: "#f06321" },
  { title: "Total Products", value: 230, color: "#28a745" },
  { title: "Total Revenue", value: 12400, color: "#007bff" },
  { title: "Total Orders", value: 345, color: "#6c757d" },
];

const recentActivities = [
  { type: "Order", description: "Order #1234 has been shipped." },
  { type: "User", description: "New user 'John Doe' registered." },
  { type: "Product", description: "Product 'Wireless Headphones' added." },
];

// Sales data for Recharts
const salesData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1900 },
  { month: "Mar", revenue: 3000 },
  { month: "Apr", revenue: 5000 },
  { month: "May", revenue: 4000 },
  { month: "Jun", revenue: 6000 },
];

function AdminHome() {
  return (
    <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ color: '#f06321', marginBottom: 2,fontWeight:'bold' }}>
            Welcome Admin!! 
      </Typography>

      {/* Overview Cards */}
      <Grid container spacing={3}>
        {dashboardStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 1,
                backgroundColor: "#fff2e5",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: stat.color }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="h4" // Adjust the font size using MUI variants or `sx`
                  sx={{
                    fontSize: "2rem", // You can directly set a custom font size here
                    fontWeight: "bold",
                    color: stat.color, // Keeps the color dynamic
                  }}
                >
                  <Countup start={0} end={stat.value} duration={2} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sales Chart */}
      <Box sx={{ mt: 5 }}>
      <Typography variant="h6" sx={{ color: '#f06321', marginBottom: 2,fontWeight:'bold' }}>
      Sales Overview
        </Typography>
        <Card
          sx={{
            boxShadow: 3,
            padding: "20px",
            backgroundColor: "#fffaf0", // Light beige background for contrast
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#f06321"
                strokeWidth={2}
                dot={{ fill: "#f06321", r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Box>

      {/* Recent Activities */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        <Card sx={{ boxShadow: 3, backgroundColor: "#f9f9f9" }}>
          <CardContent>
            {recentActivities.map((activity, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  {activity.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {activity.description}
                </Typography>
                {index < recentActivities.length - 1 && <Divider sx={{ mt: 1 }} />}
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default AdminHome;
