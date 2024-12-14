// import React, { useEffect } from "react";
// import {
//   Modal,
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Typography,
// } from "@mui/material";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";



// const productSchema = z.object({
//   skuCode: z.string().nonempty("ID is required"),
//   name: z.string().nonempty("Product name is required"),
//   price: z.number().min(0, "Price is required"),
//   description: z.string().nonempty("Description is required"),
//   category: z.string().nonempty("Category is required"),
//   imageUrl: z.string().nonempty("Image URL is required"),
// });



// const ProductModal = ({ open, onClose, product, setProducts, products }) => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//     setValue,
//   } = useForm({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       skuCode: "",
//       name: "",
//       price: "",
//       description: "",
//       category: "",
//       imageUrl: "",
//     },
//   });

//   useEffect(() => {
//     if (product) {
//       Object.keys(product).forEach((key) => {
//         setValue(key, product[key]);
//       });
//     }
//   }, [product, setValue]);

//   const onSubmit = (data) => {
//     if (product) {
//       // Edit Product
//       const updatedProducts = products.map((p) =>
//         p.id === product.id ? { ...p, ...data } : p
//       );
//       setProducts(updatedProducts);
//     } else {
//       // Add Product
//       const newProduct = {
//         id: products.length + 1,
//         ...data,
//       };
//       setProducts([...products, newProduct]);
//     }

//     onClose();
//     reset();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 400,
//           bgcolor: "background.paper",
//           borderRadius: 3,
//           boxShadow: 24,
//           p: 4,
//           border: `2px solid #f06321`,
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: "bold",
//             color: "#f06321",
//             marginBottom: 2,
//             textAlign: "center",
//           }}
//         >
//           {product ? "Edit Product" : "Add New Product"}
//         </Typography>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             fullWidth
//             label="Sku Code"
//             {...register("skuCode")}
//             error={!!errors.skuCode}
//             helperText={errors.skuCode?.message}
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Product Name"
//             {...register("name")}
//             error={!!errors.name}
//             helperText={errors.name?.message}
//             sx={{ marginBottom: 2 }}
//           />


//           <TextField
//             fullWidth
//             label="Description"
//             multiline
//             type="string"
//             {...register("description")}
//             error={!!errors.description}
//             helperText={errors.description?.message}
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Price"
//             type="number"
//             {...register("price", { valueAsNumber: true })}
//             error={!!errors.price}
//             helperText={errors.price?.message}
//             sx={{ marginBottom: 2 }}
//           />


//           <TextField
//             select
//             fullWidth
//             label="Category"
//             {...register("category")}
//             error={!!errors.category}
//             helperText={errors.category?.message}
//             sx={{ marginBottom: 2 }}
//           >
//             <MenuItem value=""  >
//               Select Category
//             </MenuItem>
//             <MenuItem value="" >dvd</MenuItem>
//             <MenuItem value="" >loosu</MenuItem>
//             <MenuItem value="" >visar</MenuItem>
//             <MenuItem value="" >pekko</MenuItem>
//             <MenuItem value="" >okin</MenuItem>
//             <MenuItem value="" >cdc</MenuItem>
//             <MenuItem value="" >dfcd</MenuItem>


//           </TextField>

//           <TextField
//             fullWidth
//             type="file"
//             label="image"
//             {...register("image")}
//             error={!!errors.image}
//             helperText={errors.image?.message}
//             sx={{ marginBottom: 2 }}
//           />

//           <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: "#f06321",
//                 borderColor: "#f06321",
//                 "&:hover": { backgroundColor: "#f0632130" },
//               }}
//               onClick={onClose}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{
//                 backgroundColor: "#f06321",
//                 "&:hover": { backgroundColor: "#d05b1c" },
//               }}
//             >
//               {product ? "Update" : "Add"}
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Modal>
//   );
// };

// export default ProductModal;
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { toast } from "react-toastify";





const productSchema = z.object({
  skuCode: z.string().nonempty("ID is required"),
  name: z.string().nonempty("Product name is required"),
  price: z.number().min(0, "Price is required"),
  description: z.string().nonempty("Description is required"),
  category: z.string().nonempty("Category is required"),
  imageUrl: z.string().nonempty("Image URL is required"),
});

const ProductModal = ({ open, onClose, product, setProducts, products }) => {
  const [imageFile, setImageFile] = useState(null); // State for selected image

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      skuCode: "",
      name: "",
      price: "",
      description: "",
      category: "",
      imageUrl: "",
    },
  });

  useEffect(() => {
    if (product) {
      Object.keys(product).forEach((key) => {
        setValue(key, product[key]);
      });
    } else {
      reset();
    }
  }, [product, setValue, reset]);

  const uploadImageToFirebase = async (file) => {
    if (!file) return null;

    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  const onSubmit = async (data) => {
    try {
      // Check if there's a file to upload
      let imageUrl = data.imageUrl; // Default to the existing image URL
      if (imageFile) {
        imageUrl = await uploadImageToFirebase(imageFile); // Upload file and get URL
      }

      const payload = {
        ...data,
        price: Number(data.price), // Ensure price is sent as a number
        imageUrl, // Use the uploaded or existing image URL
      };

      if (product) {
        // Update product (PUT request)
        const response = await axios.put(`/api/products/${product.id}`, payload);
        const updatedProducts = products.map((p) =>
          p.id === product.id ? { ...response.data } : p
        );
        setProducts(updatedProducts);
        toast.success("Product updated successfully!");
      } else {
        // Add new product (POST request)
        const response = await axios.post(`/api/products`, payload);
        setProducts([...products, response.data]);
        toast.success("Product added successfully!");
      }

      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };


  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>

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
            border: "2px solid #f06321",
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

          <TextField
            fullWidth
            label="Sku Code"
            {...register("skuCode")}
            error={!!errors.skuCode}
            helperText={errors.skuCode?.message}
            sx={{ marginBottom: 2 }}
          />
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
            label="Description"
            multiline
            type="string"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
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
            select
            fullWidth
            label="Category"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
            <MenuItem value="Earbuds">Earbuds</MenuItem>
            <MenuItem value="Watch">Watch</MenuItem>
            {/* <MenuItem value="okin">Okin</MenuItem>
            <MenuItem value="cdc">CDC</MenuItem>
            <MenuItem value="dfcd">DFCD</MenuItem> */}
          </TextField>
          <TextField
            fullWidth
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
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
      
    </Box>
    </form>
    </Modal >
  );
};

export default ProductModal;
