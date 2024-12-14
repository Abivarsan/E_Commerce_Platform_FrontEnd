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
    MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const registrationSchema = z.object({
    userName: z.string().min(3, "Username must be at least 3 characters").nonempty("Username is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .nonempty("Password is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    name: z.string().nonempty("Name is required"),
    age: z
        .number()
        .min(18, "Age must be at least 18")
        .max(100, "Age must be below 100")
        .refine((val) => !isNaN(val), "Age must be a number"),
    dob: z.string().nonempty("Date of birth is required"),
    role: z.string().nonempty("Role is required"),
});

const roles = ["Customer", "Delivery Person"];


const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registrationSchema),
    });
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        try {
            setIsLoading(true)

            const response = await axios.post(
                `http://10.10.27.17:8082/api/user/addUser`, data
            );

            if ( response.status === 200 || response.status === 201) {
                // Assuming 201 for created, 200 for success
                toast.success("Registration successful!");
                navigate("/")
                console.log("Registration successful:", response.data);
            } else {
                toast.error("Registration failed. Please try again.");
            }
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            console.error("Error during registration:", error);
            toast.error("Something went wrong. Please check your data and try again.");
        }
    };


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

            {/* Right Registration Section */}
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
                            mr: 5
                        }}
                    >
                        Register
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
                        {/* Username Field */}
                        <TextField
                            fullWidth
                            label="Username"
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

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
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

                        {/* Name Field */}
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
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

                        {/* Age Field */}
                        <TextField
                            fullWidth
                            label="Age"
                            type="number"
                            variant="outlined"
                            {...register("age", { valueAsNumber: true })}
                            error={!!errors.age}
                            helperText={errors.age?.message}
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

                        {/* DOB Field */}
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            type="date"
                            variant="outlined"
                            {...register("dob")}
                            error={!!errors.dob}
                            helperText={errors.dob?.message}
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
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        {/* Role Field */}
                        <TextField
                            select
                            fullWidth
                            label="Role"
                            variant="outlined"
                            {...register("role")}
                            error={!!errors.role}
                            helperText={errors.role?.message}
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
                        >
                            {roles.map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
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

                        {/* Register Button */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={isLoading}
                            startIcon={isLoading ? <CircularProgress size="1rem" /> : null}

                            sx={{
                                backgroundColor: "#f06321",
                                "&:hover": { backgroundColor: "#d05b1c" },
                                textTransform: "none",
                                width: "90%",
                            }}
                        >
                            Register
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RegistrationPage;
