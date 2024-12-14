import React, { useState } from "react";
import {
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    IconButton,
    InputAdornment,
    CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link as RouterLink, Navigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { set } from "date-fns";




// Validation Schema
const loginSchema = z.object({
    userName: z
        .string().min(1, "User name is required"),
    password: z.string().nonempty("Password is required"),
});
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        try {
            setIsLoading(true)
            const response = await axios.post(`http://10.10.27.17:8082/api/user/authenticate`, data);
            const token = response.data;

            if (token) {
                const decodedToken = jwtDecode(token);
                const { userName, role } = decodedToken;

                localStorage.setItem("token", token);
                localStorage.setItem("userName", userName);
                localStorage.setItem("userRole", role);

                console.log("Login successful:", { userName, role });
                const Userole = localStorage.getItem("userRole")
                toast.success("Login successful!");


                // Navigate based on user role
                if (role === "Admin") {
                    navigate("/admin");
                } else if (role === "Delivery") {
                    navigate("/delivery");
                } else if (role === "Customer") {
                    navigate("/customer");
                } else {
                    navigate("/"); // Default redirect to login
                }
            } else {
                throw new Error("Token not found in response");
            }
            window.location.reload();
            setIsLoading(false)

        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials and try again.");
            setIsLoading(false);

        }
    };

    // const LoginPage = () => {
    //     const [showPassword, setShowPassword] = useState(false);

    //     const {
    //         register,
    //         handleSubmit,
    //         formState: { errors },
    //     } = useForm({
    //         resolver: zodResolver(loginSchema),
    //     });

    //     const onSubmit = async (data) => {

    //         try {

    //             console.log("Login Data:", data);

    //             const response = await axios.post(`http://10.10.27.17:8082/api/user/authenticate`, data);
    //             console.log(response.data);


    //             const  token  = response.data;

    //             if (token) {
    //                 const decodedToken = jwtDecode(token);
    //                 const { userName, role } = decodedToken;

    //                 localStorage.setItem("token", token);
    //                 localStorage.setItem("userName", userName);
    //                 localStorage.setItem("userRole", role);

    //                 console.log("Login successful:", { userName, role });
    //                 const UserRole = localStorage.getItem("userRole");


    //                 if (UserRole === "Admin") {
    //                     return <Navigate to="/admin" />;
    //                   } else if (UserRole === "Delivery") {
    //                     return <Navigate to="/delivery" />;
    //                   } else if (UserRole === "Customer") {
    //                     return <Navigate to="/customer" />;
    //                   } else {
    //                     return <Navigate to="/" />; // Redirect to login if no role
    //                   }
    //             } else {
    //                 throw new Error("Token not found in response");
    //             }
    //         } catch (error) {
    //             console.error("Login failed:", error);
    //             alert("Login failed. Please check your credentials and try again.");
    //         }
    //     };


    return (
        <Grid container sx={{ height: "100vh" }}>
            {/* Left Image Section */}
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                            'url("https://img.freepik.com/premium-vector/wifi-icon-with-password-website-server-phone-pc-protection-gradient-blur-button-with-glassmorphism-clear-glass-design_399089-4073.jpg?ga=GA1.1.1475788798.1724490137&semt=ais_hybrid")', // Replace this with a real image URL
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            color: "#f06321", // White text for better contrast
                            backgroundColor: "#fff2e5", // Optional semi-transparent background
                            padding: "8px 16px", // Padding around text
                            borderRadius: "8px", // Rounded corners
                            border: `3px solid #f06321`,
                        }}
                    >
                        TechHub
                    </Typography>
                </Box>
            </Grid>

            {/* Right Login Section */}
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        px: 4,
                        ml: 14
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: 4,
                            color: "#f06321",
                            mr: 7
                        }}
                    >
                        Login
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                        {/* Email Field */}
                        <TextField
                            fullWidth
                            label="Your username"
                            variant="outlined"
                            {...register("userName")}
                            error={!!errors.userName}
                            helperText={errors.userName?.message}
                            sx={{
                                marginBottom: 2,
                                width: "90%",
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#f06321",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#f06321",
                                },
                            }}
                        />

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            // sx={{ marginBottom: 2 }}
                            sx={{
                                marginBottom: 2,
                                width: "90%",
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#f06321",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#f06321",
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Forgot Password Link */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            {/* <Typography
                                variant="body2"
                                component={RouterLink} to="/fogot-password"

                                sx={{
                                    color: "#f06321",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                Forgot Password?
                            </Typography> */}
                            <Box />
                            <Typography
                                variant="body2"
                                component={RouterLink} to="/register"

                                sx={{
                                    color: "#f06321",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    mr: 6
                                }}
                            >
                                Don't have an account? Sign up
                            </Typography>
                        </Box>

                        {/* Login Button */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={isLoading}
                            startIcon={isLoading ? <CircularProgress size="1rem" /> : null}
                            sx={{
                                width: "90%",
                                backgroundColor: "#f06321",
                                "&:hover": { backgroundColor: "#d05b1c" },
                                textTransform: "none",
                            }}
                        >
                            LOGIN
                        </Button>

                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
