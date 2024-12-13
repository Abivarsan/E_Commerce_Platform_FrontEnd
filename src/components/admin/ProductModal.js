import React, { useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  name: z.string().nonempty("Product name is required"),
  price: z.number().min(0, "Price must be greater than or equal to 0"),
  stock: z.number().min(0, "Stock must be greater than or equal to 0"),
  category: z.string().nonempty("Category is required"),
  image: z.string().nonempty("Image URL is required"),
});

const ProductModal = ({ open, onClose, product, categories, setProducts, products }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      category: "",
      image: "",
    },
  });

  useEffect(() => {
    if (product) {
      Object.keys(product).forEach((key) => {
        setValue(key, product[key]);
      });
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    if (product) {
      // Edit Product
      const updatedProducts = products.map((p) =>
        p.id === product.id ? { ...p, ...data } : p
      );
      setProducts(updatedProducts);
    } else {
      // Add Product
      const newProduct = {
        id: products.length + 1,
        ...data,
      };
      setProducts([...products, newProduct]);
    }

    onClose();
    reset();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          border: `2px solid #f06321`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#f06321",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          {product ? "Edit Product" : "Add New Product"}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Product Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            error={!!errors.price}
            helperText={errors.price?.message}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Stock"
            type="number"
            {...register("stock", { valueAsNumber: true })}
            error={!!errors.stock}
            helperText={errors.stock?.message}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            select
            fullWidth
            label="Category"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
            sx={{ marginBottom: 2 }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Image URL"
            {...register("image")}
            error={!!errors.image}
            helperText={errors.image?.message}
            sx={{ marginBottom: 2 }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: "#f06321",
                borderColor: "#f06321",
                "&:hover": { backgroundColor: "#f0632130" },
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#f06321",
                "&:hover": { backgroundColor: "#d05b1c" },
              }}
            >
              {product ? "Update" : "Add"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ProductModal;
