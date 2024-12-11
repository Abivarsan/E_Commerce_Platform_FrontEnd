import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Tooltip,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProductModal from "../components/admin/ProductModal";
import AlertBox from "../components/common/AlertBox";

const AdminProductsPage = () => {
  const theme = useTheme();

  // Sample categories and products
  const categories = ["Electronics", "Clothing", "Books", "Furniture"];
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      image: "https://via.placeholder.com/150",
      price: 699.99,
      stock: 10,
      category: "Electronics",
    },
    {
      id: 2,
      name: "T-Shirt",
      image: "https://via.placeholder.com/150",
      price: 19.99,
      stock: 50,
      category: "Clothing",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  // Handlers
  const handleOpenModal = (product = null) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpenModal(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setOpenConfirmDialog(false);
  };

  const handleOpenConfirmDialog = (product) => {
    setSelectedProduct(product);
    setOpenConfirmDialog(true);
  };

  const handleCloseConfirmDialog = () => {
    setSelectedProduct(null);
    setOpenConfirmDialog(false);
  };

  // Filter and Search Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filterCategory
      ? product.category === filterCategory
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ padding: 3 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#f06321" }}>
          Manage Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            backgroundColor: "#f06321",
            "&:hover": { backgroundColor: "#d05b1c" },
          }}
          onClick={() => handleOpenModal()}
        >
          Add New Product
        </Button>
      </Box>

      {/* Search and Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          marginBottom: 3,
        }}
      >
        <TextField
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: 1, color: "#555" }} />,
          }}
          sx={{ flex: 1, borderColor: "#f06321" }}
        />
        <TextField
          select
          label="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          sx={{ width: "250px" }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Product Cards */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 3,
                overflow: "hidden",
                "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {product.name}
                </Typography>
                <Typography sx={{ color: "#666" }}>
                  Price: ${product.price.toFixed(2)}
                </Typography>
                <Typography sx={{ color: "#666" }}>
                  Stock: {product.stock}
                </Typography>
                <Typography sx={{ color: "#f06321", marginTop: 1 }}>
                  {product.category}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  padding: "0 16px 16px 16px",
                }}
              >
                <Tooltip title="Edit Product">
                  <IconButton
                    onClick={() => handleOpenModal(product)}
                    sx={{
                      color: "#f06321",
                      "&:hover": { backgroundColor: "#f0632130" },
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Product">
                  <IconButton
                    onClick={() => handleOpenConfirmDialog(product)}
                    sx={{
                      color: "#f06321",
                      "&:hover": { backgroundColor: "#f0632130" },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modals */}
      {openModal && (
        <ProductModal
          open={openModal}
          onClose={handleCloseModal}
          product={selectedProduct}
          categories={categories}
          setProducts={setProducts}
          products={products}
        />
      )}
      {/* <ConfirmationDialog
        open={openConfirmDialog}
        onClose={handleCloseConfirmDialog}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${selectedProduct?.name}?`}
        onConfirm={() => handleDeleteProduct(selectedProduct.id)}
      /> */}
      <AlertBox
                open={openConfirmDialog}
                title="Delete Product"
                message="Are you sure you want to deelete this product?"
                onClose={handleCloseConfirmDialog}
                onAgree={() => handleDeleteProduct(selectedProduct.id)}
                />
    </Box>
  );
};

export default AdminProductsPage;
