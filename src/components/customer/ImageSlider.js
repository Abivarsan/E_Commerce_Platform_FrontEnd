import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Cover1 = 'https://img.freepik.com/premium-psd/black-friday-super-sale-web-banner-template_106176-4450.jpg?ga=GA1.1.1475788798.1724490137&semt=ais_hybrid';
const Cover2 = 'https://img.freepik.com/premium-psd/promotion-product-sale-facebook-cover-template_160623-126.jpg?ga=GA1.1.1475788798.1724490137&semt=ais_hybrid';
const Cover3 = 'https://img.freepik.com/premium-psd/cyber-monday-super-sale-facebook-cover-banner-template_106176-4530.jpg?ga=GA1.1.1475788798.1724490137&semt=ais_hybrid';


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {[Cover1, Cover2, Cover3].map((cover, index) => (
                <Box key={index} position="relative" width="100%" height="100vh">
                    <img
                        src={cover}
                        alt={`cover-${index}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        // bgcolor="rgba(173, 216, 230, 0.5)"
                    />
                </Box>
            ))}
        </Slider>
    );
};

export default ImageSlider;
