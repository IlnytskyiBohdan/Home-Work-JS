import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/slices/sliceProducts";
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
  CircularProgress,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ProductForm from "../../components/ProductForm/ProductForm";





const ProductsTable = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <Typography
        variant='h3'
        sx={{ fontWeight: "bold", textAlign: "center", color: "white", marginBottom: 3 }}>
        Products
      </Typography>

      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        onClick={() => setOpenForm(true)}>
        Add Product
      </Button>

      {status === "loading" ? (
        <CircularProgress color='success' sx={{ display: "block", margin: "auto" }} />
      ) : status === "failed" ? (
        <Typography sx={{ color: "red", textAlign: "center" }}>Error: {error}</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ width: "90%", margin: "auto", boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#3BB143" }}>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Price (₴)</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price}₴</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        setSelectedProduct(product);
                        setOpenForm(true);
                      }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <ProductForm open={openForm} onClose={() => setOpenForm(false)} product={selectedProduct} />
    </Container>
  );
};

export default ProductsTable;






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
  import { fetchProducts, deleteProduct } from "../../redux/slices/sliceProducts";
  
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
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const handleSort = (key, isNumeric) => {
      const newDirection = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
      setSortConfig({ key, direction: newDirection });
    };
  
    const sortedProducts = useMemo(() => {
      if (!sortConfig.key) return products;
  
      return [...products].sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];
  
        if (typeof valueA === "number" && typeof valueB === "number") {
          return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
        } else if (typeof valueA === "string" && typeof valueB === "string") {
          return sortConfig.direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }
        return 0;
      });
    }, [products, sortConfig]);
  
    const navigate = useNavigate();
    const handlePreviewClick = () => navigate("/products-previee");
  
    const handleAddProductClick = () => {
      console.log("Add Product clicked");
    };
  
    const handleDelete = (id) => {
      dispatch(deleteProduct(id));
    };
  
    return (
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
          <ProductsButton
            label='Preview'
            startIcon={<AccountCircle />}
            onClick={handlePreviewClick}
          />
          <ProductsButton label='Add product' startIcon={<Add />} onClick={handleAddProductClick} />
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
          <TableContainer component={Paper} sx={{ width: "90%", margin: "auto", boxShadow: 3 }}>
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
                      <IconButton sx={{ color: "black" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton sx={{ color: "black" }} onClick={() => handleDelete(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    );
  };
  
  export default ProductsTable;