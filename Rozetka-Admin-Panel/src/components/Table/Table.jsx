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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useMemo } from "react";

const initialProducts = [
  { id: 0, category: "PC", name: "Lenovo Y50-70", quantity: 5, price: 25000 },
  { id: 1, category: "Clothes", name: "Nike M Nk Df Acd21", quantity: 22, price: 4000 },
  { id: 2, category: "Plumbing", name: "CERSANIT MITO 17", quantity: 1337, price: 5000 },
  { id: 3, category: "A", name: "A ", quantity: 1337, price: 5000 },
  { id: 4, category: "B", name: "B ", quantity: 1337, price: 5000 },
];

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
  const [selectedRow, setSelectedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key, isNumeric) => {
    const newDirection = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction: newDirection });
  };

  const sortedProducts = useMemo(() => {
    if (!sortConfig.key) return initialProducts;

    return [...initialProducts].sort((a, b) => {
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
  }, [sortConfig]);

  return (
    <Container>
      <Typography
        variant='h3'
        sx={{ fontWeight: "bold", textAlign: "center", color: "white", marginBottom: 3 }}>
        Products
      </Typography>
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
                  <IconButton sx={{ color: "black" }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProductsTable;
