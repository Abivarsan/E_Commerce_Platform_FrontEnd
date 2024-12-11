// import React, { useState } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Typography,
//   Chip,
// } from "@mui/material";

// const dummyUsers = [
//   { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", phone: "123-456-7890", status: "Active" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Customer", phone: "123-456-7891", status: "Active" },
//   { id: 3, name: "Alex Brown", email: "alex@example.com", role: "Delivery Person", phone: "123-456-7892", status: "Inactive" },
//   { id: 4, name: "Lisa White", email: "lisa@example.com", role: "Customer", phone: "123-456-7893", status: "Active" },
// ];

// const AdminCustomer = () => {
//   const [users, setUsers] = useState(dummyUsers);
//   const [filterRole, setFilterRole] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);

//   // Handle Role Filtering
//   const handleRoleFilterChange = (event) => {
//     setFilterRole(event.target.value);
//   };

//   // Handle Search Query
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Open Delete Dialog
//   const handleDeleteClick = (user) => {
//     setUserToDelete(user);
//     setDeleteDialogOpen(true);
//   };

//   // Close Delete Dialog
//   const handleCloseDialog = () => {
//     setDeleteDialogOpen(false);
//     setUserToDelete(null);
//   };

//   // Confirm Deletion
//   const handleConfirmDelete = () => {
//     setUsers(users.filter((user) => user.id !== userToDelete.id));
//     handleCloseDialog();
//   };

//   // Filtered and Searched Users
//   const filteredUsers = users.filter((user) => {
//     const matchesRole = filterRole === "All" || user.role === filterRole;
//     const matchesSearch =
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.phone.includes(searchQuery);
//     return matchesRole && matchesSearch;
//   });

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Filters */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: 3,
//         }}
//       >
//         <TextField
//           label="Search Users"
//           variant="outlined"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           sx={{ width: "60%" }}
//         />
//         <Select
//           value={filterRole}
//           onChange={handleRoleFilterChange}
//           displayEmpty
//           sx={{ width: "200px" }}
//         >
//           <MenuItem value="All">All Roles</MenuItem>
//           <MenuItem value="Admin">Admin</MenuItem>
//           <MenuItem value="Customer">Customer</MenuItem>
//           <MenuItem value="Delivery Person">Delivery Person</MenuItem>
//         </Select>
//       </Box>

//       {/* Table */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Email</strong></TableCell>
//               <TableCell><strong>Phone</strong></TableCell>
//               <TableCell><strong>Role</strong></TableCell>
//               <TableCell><strong>Status</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => (
//                 <TableRow key={user.id}>
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>{user.phone}</TableCell>
//                   <TableCell>
//                     <Chip
//                       label={user.role}
//                       sx={{
//                         backgroundColor:
//                           user.role === "Admin"
//                             ? "#f06321"
//                             : user.role === "Customer"
//                             ? "blue"
//                             : "green",
//                         color: "white",
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Chip
//                       label={user.status}
//                       sx={{
//                         backgroundColor: user.status === "Active" ? "green" : "red",
//                         color: "white",
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Button
//                       variant="outlined"
//                       color="error"
//                       onClick={() => handleDeleteClick(user)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={6} align="center">
//                   No users found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Delete User</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete{" "}
//             <strong>{userToDelete?.name}</strong>? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleConfirmDelete} color="error" variant="contained">
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default AdminCustomer;

import React, { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Select,
    MenuItem,
    InputAdornment,
    Chip,
    IconButton,
    Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserDeleteDialog from "../components/admin/UserDeleteDialog";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Customer", phone: "123-456-7891" },
    { id: 3, name: "Alex Brown", email: "alex@example.com", role: "Delivery Person", phone: "123-456-7892" },
    { id: 4, name: "Lisa White", email: "lisa@example.com", role: "Customer", phone: "123-456-7893" },
];

const CustomerPage = () => {
    const [users, setUsers] = useState(dummyUsers);
    const [filterRole, setFilterRole] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    // Handle Role Filtering
    const handleRoleFilterChange = (event) => {
        setFilterRole(event.target.value);
    };

    // Handle Search Query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Open Delete Dialog
    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setDeleteDialogOpen(true);
    };

    // Confirm Deletion
    const handleConfirmDelete = () => {
        setUsers(users.filter((user) => user.id !== userToDelete.id));
        setDeleteDialogOpen(false);
    };

    // Filtered and Searched Users
    const filteredUsers = users.filter((user) => {
        const matchesRole = filterRole === "All" || user.role === filterRole;
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.phone.includes(searchQuery);
        return matchesRole && matchesSearch;
    });


    return (
        <Box sx={{ padding: 3 }}>
            {/* Filters */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 3,
                }}
            >
                <TextField
                    placeholder="Search Users"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ marginBottom: "20px" }}
                    InputLabelProps={{
                        style: { color: "#f06321" },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#f06321",
                            },
                            "&:hover fieldset": {
                                borderColor: "#d8511a",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#f06321",
                            },

                        },
                        width: "60%"
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#f06321" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Select
                    value={filterRole}
                    onChange={handleRoleFilterChange}
                    displayEmpty
                    sx={{
                        width: "200px",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#f06321" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#d8511a" },
                        "& .MuiSelect-icon": { color: "#f06321" },
                    }}
                >
                    <MenuItem value="All">All Roles</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Delivery Person">Delivery Person</MenuItem>
                </Select>
            </Box>

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{bgcolor:"#fffaf0"}}>
                            <TableCell sx={{ color: "#f06321", fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ color: "#f06321", fontWeight: "bold" }}>Email</TableCell>
                            <TableCell sx={{ color: "#f06321", fontWeight: "bold" }}>Phone</TableCell>
                            <TableCell sx={{ color: "#f06321", fontWeight: "bold" }}>Role</TableCell>
                            <TableCell sx={{ color: "#f06321", fontWeight: "bold" }}>Actions</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={user.role}
                                            sx={{
                                                backgroundColor:
                                                    user.role === "Admin"
                                                        ? "#f06321"
                                                        : user.role === "Customer"
                                                            ? "blue"
                                                            : "green",
                                                color: "white",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Tooltip title="Delete User" arrow>
                                            <IconButton
                                                color="error"
                                                onClick={() => handleDeleteClick(user)}
                                            >
                                                <DeleteOutlineIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Delete Confirmation Dialog */}
            <UserDeleteDialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
                userToDelete={userToDelete}
            />
        </Box>
    );
};

export default CustomerPage;
