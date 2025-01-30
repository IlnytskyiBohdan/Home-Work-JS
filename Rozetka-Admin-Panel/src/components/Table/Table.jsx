// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, Button, IconButton, TextField, Dialog, DialogActions, DialogContent,
//   DialogTitle
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// const API_URL = "http://localhost:3000/products";

// const ProductsTable = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", category: "", quantity: 0, price: 0 });


//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Ошибка при загрузке товаров:", error);
//     }
//   };


//   const handleOpen = (product = null) => {
//     setOpen(true);
//     if (product) {
//       setSelectedProduct(product);
//       setFormData(product);
//     } else {
//       setSelectedProduct(null);
//       setFormData({ name: "", category: "", quantity: 0, price: 0 });
//     }
//   };


//   const handleClose = () => setOpen(false);

//   // Обновление полей формыl
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Добавление / редактирование товара
//   const handleSubmit = async () => {
//     if (selectedProduct) {
//       // Редактирование товара
//       await axios.put(`${API_URL}/${selectedProduct.id}`, formData);
//     } else {
//       // Добавление нового товара
//       await axios.post(API_URL, { ...formData, id: Date.now() });
//     }
//     fetchProducts();
//     handleClose();
//   };

//   // Удаление товара
//   const handleDelete = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchProducts();
//   };

//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto", mt: 5 }}>
//       <Button variant="contained" color="success" sx={{ mb: 2 }} onClick={() => handleOpen()}>
//         + Add Product
//       </Button>

//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Quantity</TableCell>
//             <TableCell>Price ($)</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {products.map((product) => (
//             <TableRow
//               key={product.id}
//               sx={{
//                 backgroundColor: selectedProduct?.id === product.id ? "#A8E6CF" : "inherit",
//                 cursor: "pointer",
//                 "&:hover": { backgroundColor: "#E8F5E9" }
//               }}
//               onClick={() => setSelectedProduct(product)}
//             >
//               <TableCell>{product.id}</TableCell>
//               <TableCell>{product.category}</TableCell>
//               <TableCell>{product.name}</TableCell>
//               <TableCell>{product.quantity}</TableCell>
//               <TableCell>{product.price}</TableCell>
//               <TableCell>
//                 <IconButton color="primary" onClick={() => handleOpen(product)}>
//                   <Edit />
//                 </IconButton>
//                 <IconButton color="error" onClick={() => handleDelete(product.id)}>
//                   <Delete />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Диалоговое окно для добавления / редактирования товара */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{selectedProduct ? "Edit Product" : "Add Product"}</DialogTitle>
//         <DialogContent>
//           <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} sx={{ mt: 2 }} />
//           <TextField fullWidth label="Category" name="category" value={formData.category} onChange={handleChange} sx={{ mt: 2 }} />
//           <TextField fullWidth label="Quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} sx={{ mt: 2 }} />
//           <TextField fullWidth label="Price" name="price" type="number" value={formData.price} onChange={handleChange} sx={{ mt: 2 }} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">Cancel</Button>
//           <Button onClick={handleSubmit} color="primary">{selectedProduct ? "Save" : "Add"}</Button>
//         </DialogActions>
//       </Dialog>
//     </TableContainer>
//   );
// };

// export default ProductsTable;