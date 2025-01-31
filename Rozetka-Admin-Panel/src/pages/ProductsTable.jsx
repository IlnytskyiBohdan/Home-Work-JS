import { Box, Container } from "@mui/material";
import { AccountCircle, Add } from "@mui/icons-material";
import ProductsButton from "../components/Buttons/ProductsButton/ProductsButton";
import TableProducts from "../components/Table/Table"

const ProductsTable = () => {
  const handlePreviewClick = () => {
    console.log("Preview clicked");
  };

  const handleAddProductClick = () => {
    console.log("Add Product clicked");
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
      <Box>
        <TableProducts />
      </Box>
    </Container>
  );
};

export default ProductsTable;
