
// import React, { useState } from "react";
// import {
//     Container,
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     TextField,
//     MenuItem,
//     Slider,
//     Modal,
//     Tooltip,
//     CardHeader,
//     IconButton,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// // Dummy data for products
// const productsData = [
//     { id: 1, name: "Smartphone", category: "Electronics", description: "Enjoy crisp sound and deep bass with these wireless earbuds, offering a comfortable fit and long-lasting battery life", price: 699, image: "https://via.placeholder.com/150" },
//     { id: 2, name: "Laptop", category: "Electronics", description: "Track your fitness and stay connected with this sleek smartwatch, featuring heart rate monitoring and notifications directly on your wrist.", price: 999, image: "https://via.placeholder.com/150" },
//     { id: 3, name: "T-Shirt", category: "Clothing", description: "Track your fitness and stay connected with this sleek smartwatch, featuring heart rate monitoring and notifications directly on your wrist.", price: 19, image: "https://via.placeholder.com/150" },
//     { id: 4, name: "Jeans", category: "Clothing", description: "Track your fitness and stay connected with this sleek smartwatch, featuring heart rate monitoring and notifications directly on your wrist.", price: 49, image: "https://via.placeholder.com/150" },
//     { id: 5, name: "Jacket", category: "Clothing", description: "Track your fitness and stay connected with this sleek smartwatch, featuring heart rate monitoring and notifications directly on your wrist.", price: 89, image: "https://via.placeholder.com/150" },
//     { id: 6, name: "Headphones", category: "Electronics", description: "Track your fitness and stay connected with this sleek smartwatch, featuring heart rate monitoring and notifications directly on your wrist.", price: 199, image: "https://via.placeholder.com/150" },
// ];

// // Dummy categories
// const categories = ["All", "Electronics", "Clothing"];

// function CustomerProduct() {
//     // States for filtering and modal
//     const [category, setCategory] = useState("All");
//     const [priceRange, setPriceRange] = useState([0, 1000]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedProduct, setSelectedProduct] = useState(null); // For modal
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Handle category change
//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     // Handle price range change
//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     // Open modal for product details
//     const handleViewMore = (product) => {
//         setSelectedProduct(product);
//         setIsModalOpen(true);
//     };

//     // Filter products based on state
//     const filteredProducts = productsData.filter(
//         (product) =>
//             (category === "All" || product.category === category) &&
//             product.price >= priceRange[0] &&
//             product.price <= priceRange[1] &&
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <Container style={{ marginTop: "40px" }}>
//             <Grid container spacing={3}>
//                 {/* Filters Section */}
//                 <Grid item xs={12} md={3}>
//                     <Typography variant="h6" gutterBottom>
//                         Filters
//                     </Typography>
//                     {/* Search by Name */}
//                     <TextField
//                         fullWidth
//                         label="Search by Name"
//                         variant="outlined"
//                         size="small"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" }, // Label color
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": {
//                                     borderColor: "#f06321", // Default border color
//                                 },
//                                 "&:hover fieldset": {
//                                     borderColor: "#d8511a", // Hover border color
//                                 },
//                                 "&.Mui-focused fieldset": {
//                                     borderColor: "#f06321", // Focused border color
//                                 },
//                             },
//                         }}
//                     />

//                     {/* Category Filter */}
//                     <TextField
//                         fullWidth
//                         select
//                         label="Category"
//                         value={category}
//                         onChange={handleCategoryChange}
//                         variant="outlined"
//                         size="small"
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" },
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": {
//                                     borderColor: "#f06321",
//                                 },
//                                 "&:hover fieldset": {
//                                     borderColor: "#d8511a",
//                                 },
//                                 "&.Mui-focused fieldset": {
//                                     borderColor: "#f06321",
//                                 },
//                             },
//                         }}
//                     >
//                         {categories.map((cat) => (
//                             <MenuItem key={cat} value={cat}>
//                                 {cat}
//                             </MenuItem>
//                         ))}
//                     </TextField>

//                     {/* Price Range Slider */}
//                     <Typography gutterBottom>Price Range</Typography>
//                     <Slider
//                         value={priceRange}
//                         onChange={handlePriceChange}
//                         valueLabelDisplay="auto"
//                         min={0}
//                         max={1000}
//                         style={{ color: "#f06321" }}
//                     />
//                 </Grid>

//                 {/* Product Grid Section */}
//                 <Grid item xs={12} md={9}>
//                     <Grid container spacing={3}>
//                         {filteredProducts.map((product) => (
//                             <Grid item xs={12} sm={6} md={4} key={product.id}>
//                                 <Card elevation={3}>
//                                     <CardHeader
//                                         title={product.name}

//                                         action={
//                                             <Tooltip title="View more">
//                                                 <IconButton aria-label="view-more" onClick={() => handleViewMore(product)}>
//                                                     <MoreVertIcon />
//                                                 </IconButton>
//                                             </Tooltip>
//                                         }
//                                         sx={{
//                                             borderBottom: `2px solid #f06321`,
//                                         }}
//                                         titleTypographyProps={{
//                                             sx: {
//                                                 fontWeight: 'bold', // Example: Set font weight to bold
//                                                 fontSize: '1.2rem', // Example: Set font size
//                                                 textTransform: 'uppercase', // Example: Uppercase text
//                                             },
//                                         }}
//                                     />
//                                     {/* Product Image */}
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={product.image}
//                                         alt={product.name}
//                                     />

//                                     {/* Product Content */}
//                                     <CardContent>
//                                         <Typography variant="h6" style={{ fontWeight: "bold", color: "#f06321" }}>
//                                             {product.name}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             ${product.price}
//                                         </Typography>

//                                     </CardContent>



//                                     {/* Add to Cart Button */}
//                                     <Box textAlign="center" style={{ padding: "10px" }}>
//                                         <Button
//                                             variant="contained"
//                                             startIcon={<ShoppingCartIcon />}
//                                             style={{
//                                                 backgroundColor: "#f06321",
//                                                 color: "#fff",
//                                                 textTransform: "none",
//                                             }}
//                                             fullWidth
//                                         >
//                                             Add to Cart
//                                         </Button>
//                                     </Box>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>

//             {/* Modal for Product Details */}
//             <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <Box
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         width: 450,
//                         backgroundColor: "white",
//                         borderRadius: "8px",
//                         padding: "20px",
//                         boxShadow: 24,
//                     }}
//                 >
//                     {selectedProduct && (
//                         <>
//                             <Typography variant="h6">{selectedProduct.name}</Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Price: ${selectedProduct.price}
//                             </Typography>
//                             <img
//                                 src={selectedProduct.image}
//                                 alt={selectedProduct.name}
//                                 style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
//                             />
//                             <Typography varient="h4" >
//                                 {selectedProduct.description}
//                             </Typography>
//                             <Button
//                                 onClick={() => setIsModalOpen(false)}
//                                 style={{
//                                     backgroundColor: "#f06321",
//                                     color: "#fff",
//                                     marginTop: "10px",
//                                 }}
//                                 fullWidth
//                             >
//                                 Close
//                             </Button>
//                         </>
//                     )}
//                 </Box>
//             </Modal>
//         </Container>
//     );
// }

// export default CustomerProduct;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//     Container,
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     TextField,
//     MenuItem,
//     Slider,
//     Modal,
//     Tooltip,
//     CardHeader,
//     IconButton,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// // Dummy categories
// const categories = ["All", "Electronics", "Clothing"];

// function CustomerProduct() {
//     // States for filtering, products, and modal
//     const [productsData, setProductsData] = useState([]);
//     const [category, setCategory] = useState("All");
//     const [priceRange, setPriceRange] = useState([0, 1000]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedProduct, setSelectedProduct] = useState(null); // For modal
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Fetch products from the backend
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get("http://10.10.27.17:8081/api/product");
//                 setProductsData(response.data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     // Handle category change
//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     // Handle price range change
//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     // Open modal for product details
//     const handleViewMore = (product) => {
//         setSelectedProduct(product);
//         setIsModalOpen(true);
//     };

//     // Filter products based on state
//     const filteredProducts = productsData.filter(
//         (product) =>
//             (category === "All" || product.category === category) &&
//             product.price >= priceRange[0] &&
//             product.price <= priceRange[1] &&
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <Container style={{ marginTop: "40px" }}>
//             <Grid container spacing={3}>
//                 {/* Filters Section */}
//                 <Grid item xs={12} md={3}>
//                     <Typography variant="h6" gutterBottom>
//                         Filters
//                     </Typography>
//                     {/* Search by Name */}
//                     <TextField
//                         fullWidth
//                         label="Search by Name"
//                         variant="outlined"
//                         size="small"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" }, // Label color
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": {
//                                     borderColor: "#f06321", // Default border color
//                                 },
//                                 "&:hover fieldset": {
//                                     borderColor: "#d8511a", // Hover border color
//                                 },
//                                 "&.Mui-focused fieldset": {
//                                     borderColor: "#f06321", // Focused border color
//                                 },
//                             },
//                         }}
//                     />

//                     {/* Category Filter */}
//                     <TextField
//                         fullWidth
//                         select
//                         label="Category"
//                         value={category}
//                         onChange={handleCategoryChange}
//                         variant="outlined"
//                         size="small"
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" },
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": {
//                                     borderColor: "#f06321",
//                                 },
//                                 "&:hover fieldset": {
//                                     borderColor: "#d8511a",
//                                 },
//                                 "&.Mui-focused fieldset": {
//                                     borderColor: "#f06321",
//                                 },
//                             },
//                         }}
//                     >
//                         {categories.map((cat) => (
//                             <MenuItem key={cat} value={cat}>
//                                 {cat}
//                             </MenuItem>
//                         ))}
//                     </TextField>

//                     {/* Price Range Slider */}
//                     <Typography gutterBottom>Price Range</Typography>
//                     <Slider
//                         value={priceRange}
//                         onChange={handlePriceChange}
//                         valueLabelDisplay="auto"
//                         min={0}
//                         max={1000}
//                         style={{ color: "#f06321" }}
//                     />
//                 </Grid>

//                 {/* Product Grid Section */}
//                 <Grid item xs={12} md={9}>
//                     <Grid container spacing={3}>
//                         {filteredProducts.map((product) => (
//                             <Grid item xs={12} sm={6} md={4} key={product.id}>
//                                 <Card elevation={3}>
//                                     <CardHeader
//                                         title={product.name}
//                                         action={
//                                             <Tooltip title="View more">
//                                                 <IconButton aria-label="view-more" onClick={() => handleViewMore(product)}>
//                                                     <MoreVertIcon />
//                                                 </IconButton>
//                                             </Tooltip>
//                                         }
//                                         sx={{
//                                             borderBottom: `2px solid #f06321`,
//                                         }}
//                                         titleTypographyProps={{
//                                             sx: {
//                                                 fontWeight: 'bold', // Example: Set font weight to bold
//                                                 fontSize: '1.2rem', // Example: Set font size
//                                                 textTransform: 'uppercase', // Example: Uppercase text
//                                             },
//                                         }}
//                                     />
//                                     {/* Product Image */}
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={product.imageUrl}
//                                         alt={product.name}
//                                     />

//                                     {/* Product Content */}
//                                     <CardContent>
//                                         <Typography variant="h6" style={{ fontWeight: "bold", color: "#f06321" }}>
//                                             {product.name}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             ${product.price}
//                                         </Typography>
//                                     </CardContent>

//                                     {/* Add to Cart Button */}
//                                     <Box textAlign="center" style={{ padding: "10px" }}>
//                                         <Button
//                                             variant="contained"
//                                             startIcon={<ShoppingCartIcon />}
//                                             style={{
//                                                 backgroundColor: "#f06321",
//                                                 color: "#fff",
//                                                 textTransform: "none",
//                                             }}
//                                             fullWidth
//                                         >
//                                             Add to Cart
//                                         </Button>
//                                     </Box>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>

//             {/* Modal for Product Details */}
//             <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <Box
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         width: 450,
//                         backgroundColor: "white",
//                         borderRadius: "8px",
//                         padding: "20px",
//                         boxShadow: 24,
//                     }}
//                 >
//                     {selectedProduct && (
//                         <>
//                             <Typography variant="h6">{selectedProduct.name}</Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Price: ${selectedProduct.price}
//                             </Typography>
//                             <img
//                                 src={selectedProduct.imageUrl}
//                                 alt={selectedProduct.name}
//                                 style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
//                             />
//                             <Typography variant="body1">
//                                 {selectedProduct.description}
//                             </Typography>
//                             <Button
//                                 onClick={() => setIsModalOpen(false)}
//                                 style={{
//                                     backgroundColor: "#f06321",
//                                     color: "#fff",
//                                     marginTop: "10px",
//                                 }}
//                                 fullWidth
//                             >
//                                 Close
//                             </Button>
//                         </>
//                     )}
//                 </Box>
//             </Modal>
//         </Container>
//     );
// }

// export default CustomerProduct;
// import React, { useState, useEffect } from "react";
// import {
//     Container,
//     Grid,
//     Card,
//     CardMedia,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     TextField,
//     MenuItem,
//     Slider,
//     Modal,
//     Tooltip,
//     CardHeader,
//     IconButton,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import axios from "axios";

// function CustomerProduct() {
//     // States for products and filters
//     const [productsData, setProductsData] = useState([]); // Stores all products
//     const [categories, setCategories] = useState(["All"]); // Stores categories
//     const [category, setCategory] = useState("All");
//     const [priceRange, setPriceRange] = useState([0, 1000]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedProduct, setSelectedProduct] = useState(null); // For modal
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Fetch products and categories from the backend API
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get("http://10.10.27.17:8081/api/product");
//                 const products = response.data;
//                 setProductsData(products);

//                 // Extract unique categories from products
//                 const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
//                 setCategories(["All", ...uniqueCategories]); // Include "All" for default filtering
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     // Handle category change
//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     // Handle price range change
//     const handlePriceChange = (event, newValue) => {
//         setPriceRange(newValue);
//     };

//     // Open modal for product details
//     const handleViewMore = (product) => {
//         setSelectedProduct(product);
//         setIsModalOpen(true);
//     };

//     // Filter products based on state
//     const filteredProducts = productsData.filter(
//         (product) =>
//             (category === "All" || product.category === category) &&
//             product.price >= priceRange[0] &&
//             product.price <= priceRange[1] &&
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <Container style={{ marginTop: "40px" }}>
//             <Grid container spacing={3}>
//                 {/* Filters Section */}
//                 <Grid item xs={12} md={3}>
//                     <Typography variant="h6" gutterBottom>
//                         Filters
//                     </Typography>

//                     {/* Search by Name */}
//                     <TextField
//                         fullWidth
//                         label="Search by Name"
//                         variant="outlined"
//                         size="small"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" },
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": { borderColor: "#f06321" },
//                                 "&:hover fieldset": { borderColor: "#d8511a" },
//                                 "&.Mui-focused fieldset": { borderColor: "#f06321" },
//                             },
//                         }}
//                     />

//                     {/* Category Filter */}
//                     <TextField
//                         fullWidth
//                         select
//                         label="Category"
//                         value={category}
//                         onChange={handleCategoryChange}
//                         variant="outlined"
//                         size="small"
//                         style={{ marginBottom: "20px" }}
//                         InputLabelProps={{
//                             style: { color: "#f06321" },
//                         }}
//                         sx={{
//                             "& .MuiOutlinedInput-root": {
//                                 "& fieldset": { borderColor: "#f06321" },
//                                 "&:hover fieldset": { borderColor: "#d8511a" },
//                                 "&.Mui-focused fieldset": { borderColor: "#f06321" },
//                             },
//                         }}
//                     >
//                         {categories.map((cat) => (
//                             <MenuItem key={cat} value={cat}>
//                                 {cat}
//                             </MenuItem>
//                         ))}
//                     </TextField>

//                     {/* Price Range Slider */}
//                     <Typography gutterBottom>Price Range</Typography>
//                     <Slider
//                         value={priceRange}
//                         onChange={handlePriceChange}
//                         valueLabelDisplay="auto"
//                         min={0}
//                         max={1000}
//                         style={{ color: "#f06321" }}
//                     />
//                 </Grid>

//                 {/* Product Grid Section */}
//                 <Grid item xs={12} md={9}>
//                     <Grid container spacing={3}>
//                         {filteredProducts.map((product) => (
//                             <Grid item xs={12} sm={6} md={4} key={product.id}>
//                                 <Card elevation={3}>
//                                     <CardHeader
//                                         title={product.name}
//                                         action={
//                                             <Tooltip title="View more">
//                                                 <IconButton
//                                                     aria-label="view-more"
//                                                     onClick={() => handleViewMore(product)}
//                                                 >
//                                                     <MoreVertIcon />
//                                                 </IconButton>
//                                             </Tooltip>
//                                         }
//                                         sx={{
//                                             borderBottom: `2px solid #f06321`,
//                                         }}
//                                         titleTypographyProps={{
//                                             sx: {
//                                                 fontWeight: 'bold',
//                                                 fontSize: '1.2rem',
//                                                 textTransform: 'uppercase',
//                                             },
//                                         }}
//                                     />
//                                     {/* Product Image */}
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={product.imageUrl}
//                                         alt={product.name}
//                                     />

//                                     {/* Product Content */}
//                                     <CardContent>
//                                         <Typography
//                                             variant="h6"
//                                             style={{ fontWeight: "bold", color: "#f06321" }}
//                                         >
//                                             {product.name}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             ${product.price}
//                                         </Typography>
//                                     </CardContent>

//                                     {/* Add to Cart Button */}
//                                     <Box textAlign="center" style={{ padding: "10px" }}>
//                                         <Button
//                                             variant="contained"
//                                             startIcon={<ShoppingCartIcon />}
//                                             style={{
//                                                 backgroundColor: "#f06321",
//                                                 color: "#fff",
//                                                 textTransform: "none",
//                                             }}
//                                             fullWidth
//                                         >
//                                             Add to Cart
//                                         </Button>
//                                     </Box>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>

//             {/* Modal for Product Details */}
//             <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <Box
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         width: 450,
//                         backgroundColor: "white",
//                         borderRadius: "8px",
//                         padding: "20px",
//                         boxShadow: 24,
//                     }}
//                 >
//                     {selectedProduct && (
//                         <>
//                             <Typography variant="h6">{selectedProduct.name}</Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Price: ${selectedProduct.price}
//                             </Typography>
//                             <img
//                                 src={selectedProduct.imageUrl}
//                                 alt={selectedProduct.name}
//                                 style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
//                             />
//                             <Typography variant="body2">
//                                 {selectedProduct.description}
//                             </Typography>
//                             <Button
//                                 onClick={() => setIsModalOpen(false)}
//                                 style={{
//                                     backgroundColor: "#f06321",
//                                     color: "#fff",
//                                     marginTop: "10px",
//                                 }}
//                                 fullWidth
//                             >
//                                 Close
//                             </Button>
//                         </>
//                     )}
//                 </Box>
//             </Modal>
//         </Container>
//     );
// }

// export default CustomerProduct;

import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    MenuItem,
    Slider,
    Modal,
    Tooltip,
    CardHeader,
    IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

function CustomerProduct() {
    const [productsData, setProductsData] = useState([]);
    const [categories, setCategories] = useState(["All"]);
    const [category, setCategory] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName] = useState("Abi"); // Replace with actual logged-in userName

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://10.10.27.17:8081/api/product");
                const products = response.data;
                setProductsData(products);

                const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
                setCategories(["All", ...uniqueCategories]);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleViewMore = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const addToCart = async (skuCode, qty) => {
        const cartInfo = {
            userName: userName, // Replace with the actual user's username
            skuCode: skuCode,
            qty: qty,
        };

        try {
            const response = await axios.post("http://10.10.27.17:8082/api/user/cart/add", cartInfo);
            if (response.status === 200) {
                alert("Item added to cart successfully!");
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert(error.response.data); // "User not found" or "No stocks available"
            } else {
                alert("An error occurred while adding to the cart.");
            }
        }
    };

    const filteredProducts = productsData.filter(
        (product) =>
            (category === "All" || product.category === category) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1] &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container style={{ marginTop: "40px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Filters
                    </Typography>

                    <TextField
                        fullWidth
                        label="Search by Name"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ marginBottom: "20px" }}
                        InputLabelProps={{
                            style: { color: "#f06321" },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#f06321" },
                                "&:hover fieldset": { borderColor: "#d8511a" },
                                "&.Mui-focused fieldset": { borderColor: "#f06321" },
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        select
                        label="Category"
                        value={category}
                        onChange={handleCategoryChange}
                        variant="outlined"
                        size="small"
                        style={{ marginBottom: "20px" }}
                        InputLabelProps={{
                            style: { color: "#f06321" },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#f06321" },
                                "&:hover fieldset": { borderColor: "#d8511a" },
                                "&.Mui-focused fieldset": { borderColor: "#f06321" },
                            },
                        }}
                    >
                        {categories.map((cat) => (
                            <MenuItem key={cat} value={cat}>
                                {cat}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Typography gutterBottom>Price Range</Typography>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1000}
                        style={{ color: "#f06321" }}
                    />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Grid container spacing={3}>
                        {filteredProducts.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card elevation={3}>
                                    <CardHeader
                                        title={product.name}
                                        action={
                                            <Tooltip title="View more">
                                                <IconButton
                                                    aria-label="view-more"
                                                    onClick={() => handleViewMore(product)}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </Tooltip>
                                        }
                                        sx={{
                                            borderBottom: `2px solid #f06321`,
                                        }}
                                        titleTypographyProps={{
                                            sx: {
                                                fontWeight: 'bold',
                                                fontSize: '1.2rem',
                                                textTransform: 'uppercase',
                                            },
                                        }}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={product.imageUrl}
                                        alt={product.name}
                                    />

                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            style={{ fontWeight: "bold", color: "#f06321" }}
                                        >
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            ${product.price}
                                        </Typography>
                                    </CardContent>

                                    <Box textAlign="center" style={{ padding: "10px" }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<ShoppingCartIcon />}
                                            style={{
                                                backgroundColor: "#f06321",
                                                color: "#fff",
                                                textTransform: "none",
                                            }}
                                            fullWidth
                                            onClick={() => addToCart(product.skuCode, 1)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 450,
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "20px",
                        boxShadow: 24,
                    }}
                >
                    {selectedProduct && (
                        <>
                            <Typography variant="h6">{selectedProduct.name}</Typography>
                            <Typography variant="body1" gutterBottom>
                                Price: ${selectedProduct.price}
                            </Typography>
                            <img
                                src={selectedProduct.imageUrl}
                                alt={selectedProduct.name}
                                style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
                            />
                            <Typography variant="body2">
                                {selectedProduct.description}
                            </Typography>
                            <Button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    backgroundColor: "#f06321",
                                    color: "#fff",
                                    marginTop: "10px",
                                }}
                                fullWidth
                            >
                                Close
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </Container>
    );
}

export default CustomerProduct;
