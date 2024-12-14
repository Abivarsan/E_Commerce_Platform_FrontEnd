// import React from 'react';
// import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ImageSlider from '../components/customer/ImageSlider';

// const categories = [
//     {
//         id: 1,
//         title: 'Electronics',
//         products: [
//             { id: 1, name: 'Smartphone', price: '$699', image: 'https://via.placeholder.com/150' },
//             { id: 2, name: 'Laptop', price: '$999', image: 'https://via.placeholder.com/150' },
//             { id: 3, name: 'Headphones', price: '$199', image: 'https://via.placeholder.com/150' },
//             { id: 4, name: 'Smartwatch', price: '$299', image: 'https://via.placeholder.com/150' },
//         ],
//     },
//     {
//         id: 2,
//         title: 'Clothing',
//         products: [
//             { id: 1, name: 'T-Shirt', price: '$19', image: 'https://via.placeholder.com/150' },
//             { id: 2, name: 'Jeans', price: '$49', image: 'https://via.placeholder.com/150' },
//             { id: 3, name: 'Jacket', price: '$89', image: 'https://via.placeholder.com/150' },
//             { id: 4, name: 'Sneakers', price: '$59', image: 'https://via.placeholder.com/150' },
//         ],
//     },
// ];

// function CustomerHome() {
//     const navigate = useNavigate();

//     const handleViewMore = () => {
//         navigate(`/products`); 
//     };

//     return (
//         <Container style={{ padding: '20px 0' }}>
//             {/* <Typography variant="h4" gutterBottom>
//                 Welcome!!
//             </Typography> */}
//             {/* <Typography variant="subtitle1" gutterBottom>
//                 Browse products by category.
//             </Typography> */}
//             <ImageSlider/>
//             {categories.map((category) => (
//                 <Box key={category.id} style={{ marginBottom: '40px' }}>
//                     {/* Category Title */}
//                     <Typography
//                         variant="h5"
//                         gutterBottom
//                         style={{ marginBottom: '20px', fontWeight: 'bold', color: '#f06321' }}
//                     >
//                         {category.title}
//                     </Typography>

//                     {/* Product Cards */}
//                     <Grid container spacing={3}>
//                         {category.products.slice(0, 4).map((product) => (
//                             <Grid item xs={12} sm={6} md={3} key={product.id}>
//                                 <Card elevation={3}>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={product.image}
//                                         alt={product.name}
//                                     />
//                                     <CardContent>
//                                         <Typography variant="h6">{product.name}</Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             {product.price}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     {/* View More Button */}
//                     <Box style={{ textAlign: 'right', marginTop: '20px' }}>
//                         <Button
//                             variant="contained"
//                             style={{
//                                 backgroundColor: '#f06321',
//                                 color: '#fff',
//                                 textTransform: 'none',
//                                 fontWeight: 'bold',
//                             }}
//                             onClick={() => handleViewMore(category.id)}
//                         >
//                             View More
//                         </Button>
//                     </Box>
//                 </Box>
//             ))}
//         </Container>
//     );
// }

// export default CustomerHome;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ImageSlider from '../components/customer/ImageSlider';

function CustomerHome() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://10.10.27.17:8081/api/product'); // Replace with your backend API endpoint
                const products = response.data;

                // Group products by category
                const groupedCategories = products.reduce((acc, product) => {
                    const category = product.category;
                    if (!acc[category]) {
                        acc[category] = {
                            id: category,
                            title: category,
                            products: []
                        };
                    }
                    acc[category].products.push({
                        id: product.skuCode,
                        name: product.name,
                        price: `$${product.price}`,
                        image: product.imageUrl
                    });
                    return acc;
                }, {});

                setCategories(Object.values(groupedCategories));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleViewMore = (categoryId) => {
        navigate(`/products?category=${categoryId}`);
    };

    return (
        <Container style={{ padding: '20px 0' }}>
            <ImageSlider />
            {categories.map((category) => (
                <Box key={category.id} style={{ marginBottom: '40px' }}>
                    {/* Category Title */}
                    <Typography
                        variant="h5"
                        gutterBottom
                        style={{ marginBottom: '20px', fontWeight: 'bold', color: '#f06321' }}
                    >
                        {category.title}
                    </Typography>

                    {/* Product Cards */}
                    <Grid container spacing={3}>
                        {category.products.slice(0, 4).map((product) => (
                            <Grid item xs={12} sm={6} md={3} key={product.id}>
                                <Card elevation={3}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={product.image}
                                        alt={product.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{product.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* View More Button */}
                    <Box style={{ textAlign: 'right', marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#f06321',
                                color: '#fff',
                                textTransform: 'none',
                                fontWeight: 'bold',
                            }}
                            onClick={() => handleViewMore(category.id)}
                        >
                            View More
                        </Button>
                    </Box>
                </Box>
            ))}
        </Container>
    );
}

export default CustomerHome;