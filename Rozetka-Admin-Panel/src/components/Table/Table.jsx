import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useMemo, useEffect } from "react";
import ProductsButton from "../Buttons/ProductsButton/ProductsButton";
import { AccountCircle, Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../../redux/slices/sliceProducts";
import DeleteDialog from "../DeleteDialog/DeletDialog";
import ProductForm from "../ProductForm/ProductForm";

const columns = [
  { key: "category", label: "Category", isNumeric: false },
  { key: "name", label: "Name", isNumeric: false },
  { key: "quantity", label: "Quantity", isNumeric: true },
  { key: "price", label: "Price (₴)", isNumeric: true },
];

const SortableTableHeader = ({ label, sortKey, isNumeric, sortConfig, onSort }) => {
  const isActive = sortConfig.key === sortKey;
  const direction =
    isActive && sortConfig.direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  return (
    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
      {label}
      <IconButton size='small' sx={{ color: "white" }} onClick={() => onSort(sortKey, isNumeric)}>
        {direction}
      </IconButton>
    </TableCell>
  );
};

const ProductsTable = () => {
  const dispatch = useDispatch();

  const { items: products, status, error } = useSelector((state) => state.products);

  const [selectedRow, setSelectedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [openDialog, setOpenDialog] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const [openForm, setOpenForm] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);


  const handleOpenAddForm = () => {
    setProductToEdit(null);
    setOpenForm(true);
  };

  const handleOpenEditForm = (product) => {
    setProductToEdit(product);
    setOpenForm(true);
  };


  const handleFormSubmit = (data) => {
    if (productToEdit) {
      dispatch(updateProduct({ ...productToEdit, ...data }));
    } else {
      dispatch(addProduct(data));
    }
    setOpenForm(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSort = (key) => {
    const newDirection = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction: newDirection });
  };

  const sortedProducts = useMemo(() => {
    if (!sortConfig.key) return products || [];

    return [...(products || [])].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

  
      if (!isNaN(valueA) && !isNaN(valueB)) {
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
      }

  
      return sortConfig.direction === "asc"
        ? valueA
            .toString()
            .localeCompare(valueB.toString(), undefined, { numeric: true, sensitivity: "base" })
        : valueB
            .toString()
            .localeCompare(valueA.toString(), undefined, { numeric: true, sensitivity: "base" });
    });
  }, [products, sortConfig]);

  const navigate = useNavigate();
  const handlePreviewClick = () => navigate("/products-preview");

  
  const handleOpenDialog = (id) => {
    setProductToDelete(id);
    setOpenDialog(true);
  };


  const handleDeleteConfirm = async () => {
    if (productToDelete !== null) {
      await dispatch(deleteProduct(productToDelete));
      dispatch(fetchProducts());
      setOpenDialog(false);
    }
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <ProductsButton startIcon={<AccountCircle />} onClick={handlePreviewClick}>
          Preview
        </ProductsButton>
        <ProductsButton startIcon={<Add />} onClick={handleOpenAddForm}>
          Add product
        </ProductsButton>
      </Box>

      <Typography
        variant='h3'
        sx={{ fontWeight: "bold", textAlign: "center", color: "white", marginBottom: 3 }}>
        Products
      </Typography>

      {status === "loading" ? (
        <CircularProgress color='success' sx={{ display: "block", margin: "auto" }} />
      ) : status === "failed" ? (
        <Typography sx={{ color: "red", textAlign: "center" }}>Error: {error}</Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: "90%",
            margin: "auto",
            boxShadow: 3,
          }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#3BB143" }}>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>ID</TableCell>
                {columns.map(({ key, label, isNumeric }) => (
                  <SortableTableHeader
                    key={key}
                    label={label}
                    sortKey={key}
                    isNumeric={isNumeric}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                  />
                ))}
                <TableCell sx={{ fontWeight: "bold", color: "white" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedProducts.map((product) => (
                <TableRow
                  key={product.id}
                  onClick={() => setSelectedRow(product.id)}
                  sx={{
                    backgroundColor: selectedRow === product.id ? "#A7E3A1" : "#E8E8E8",
                    "&:hover": { backgroundColor: "#A7E3A1" },
                    cursor: "pointer",
                  }}>
                  <TableCell>{product.id}</TableCell>
                  {columns.map(({ key }) => (
                    <TableCell
                      key={key}
                      sx={{
                        fontWeight: "bold",
                        color: selectedRow === product.id ? "green" : "gray",
                      }}>
                      {key === "price" ? product[key].toLocaleString() + "₴" : product[key]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton sx={{ color: "black" }} onClick={() => handleOpenEditForm(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      sx={{ color: "black" }}
                      onClick={() => handleOpenDialog(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <DeleteDialog
              open={openDialog}
              onClose={() => setOpenDialog(false)}
              onConfirm={handleDeleteConfirm}
            />
            <ProductForm
              open={openForm}
              onClose={() => setOpenForm(false)}
              onSubmit={handleFormSubmit}
              product={productToEdit}
            />
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ProductsTable;
