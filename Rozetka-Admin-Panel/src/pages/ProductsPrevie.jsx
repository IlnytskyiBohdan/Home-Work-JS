import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/sliceProducts";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductsPrevie = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const handleBackClick = () => navigate("/products-table");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <Typography>Loading...</Typography>;
  if (status === "failed") return <Typography>Error loading products</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Button onClick={handleBackClick} sx={{ color: "white" }}>
        back
      </Button>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPrevie;
