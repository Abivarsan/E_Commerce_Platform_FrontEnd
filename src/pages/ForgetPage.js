import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation Schema
const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
});

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = (data) => {
    console.log("Forget Password Data:", data);
    // Handle password reset logic here
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: 'url("https://via.placeholder.com/800x800")', // Replace with a real image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      {/* Right Forget Password Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            px: 4,
            ml:17
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 10,
              color: "#f06321",
              mr:17
            }}
          >
            Forget Password
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
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
                width: "70%",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f06321",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#f06321",
                },
              }}
            />

            {/* Submit Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f06321",
                "&:hover": { backgroundColor: "#d05b1c" },
                textTransform: "none",
                width: "70%",
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgetPasswordPage;
