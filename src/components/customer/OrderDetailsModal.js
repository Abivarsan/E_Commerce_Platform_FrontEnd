// import React from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   Divider,
//   IconButton,
//   Chip,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const OrderDetailsModal = ({ open, onClose, order }) => {
//   return (
//     <Modal open={open} onClose={onClose} aria-labelledby="order-details-modal">
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 450,
//           bgcolor: "background.paper",
//           border: `2px solid #f06321`,
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 3,
//         }}
//       >
//         {/* Modal Header */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: 3,
//           }}
//         >
//           <Typography
//             id="order-details-modal"
//             variant="h5"
//             component="h2"
//             sx={{
//               fontWeight: "bold",
//               color: "#f06321",
//             }}
//           >
//             Order Details
//           </Typography>
//           <IconButton onClick={onClose}>
//             <CloseIcon sx={{ color: "#f06321" }} />
//           </IconButton>
//         </Box>
//         <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />


//         {/* Order Summary */}
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             marginBottom: 1,
//             fontSize: "1rem",
//             color: "#333",
//           }}
//         >
//           <Chip label={order.id} sx={{ backgroundColor: "#f06321", color: "white" }} />
//         </Typography>
//         <Typography sx={{ marginBottom: 1, fontSize: "0.95rem" }}>
//           <strong>Ordered Date:</strong> {order.date}
//         </Typography>
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             marginBottom: 3,
//             fontSize: "1rem",
//             color: "#333",
//           }}
//         >
//           Total Amout:{" "}
//           <span style={{ color: "#f06321" }}>${order.total.toFixed(2)}</span>
//         </Typography>
//         <Typography sx={{ marginBottom: 1, fontSize: "0.95rem" }}>
//           <strong>Address:</strong> {order.date}
//         </Typography>


//         {/* Order Items */}
//         {/* <Typography
//           sx={{
//             fontWeight: "bold",
//             marginBottom: 1,
//             fontSize: "1.1rem",
//             color: "#333",
//           }}
//         >
//           Items:
//         </Typography> */}
//         <Typography
//           sx={{
//             backgroundColor: "#f5f5f5",
//             padding: "10px",
//             borderRadius: 3,
//             color: "#555",
//             fontSize: "0.9rem",
//             lineHeight: "1.5",
//           }}
//         >
//           {order.items.map((item) => item.name).join(" | ")}
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

// export default OrderDetailsModal;

import React from "react";
import {
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const OrderDetailsModal = ({ open, onClose, order }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="order-details-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 450,
          bgcolor: "background.paper",
          border: `2px solid #f06321`,
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
        }}
      >
        {/* Modal Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Typography
            id="order-details-modal"
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#f06321",
            }}
          >
            Order Details
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "#f06321" }} />
          </IconButton>
        </Box>
        <Divider sx={{ marginBottom: 2, borderColor: "#f06321" }} />

        {/* Order Summary */}
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            fontSize: "1rem",
            color: "#333",
          }}
        >
          <Chip label={order.id} sx={{ backgroundColor: "#f06321", color: "white" }} />
        </Typography>
        <Typography sx={{ marginBottom: 1, fontSize: "0.95rem" }}>
          <strong>Ordered Date:</strong> {order.date}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
            fontSize: "1rem",
            color: "#333",
          }}
        >
          Total Amount:{" "}
          <span style={{ color: "#f06321" }}>${order.total.toFixed(2)}</span>
        </Typography>
        <Typography sx={{ marginBottom: 1, fontSize: "0.95rem" }}>
          <strong>Address:</strong> {order.date}
        </Typography>

        {/* Order Items */}
        <Typography
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: 3,
            color: "#555",
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}
        >
          {order.items
            .map((item) => `${item.name}(${item.quantity})`)
            .join(" | ")}
        </Typography>
      </Box>
    </Modal>
  );
};

export default OrderDetailsModal;
