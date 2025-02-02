// const Products_previe = () => {
//   return <div>Products_previe</div>;
// };

// export default Products_previe;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/sliceProducts";
import { Container, Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Products_previe = () => {
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
            <Card sx={{ backgroundColor: "white", padding: 2, boxShadow: 3, textAlign: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src='/lenovo-laptop-y50.png'
                  alt={product.name}
                  style={{ width: "100%", maxHeight: "200px" }}
                />
              </Box>
              <CardContent>
                <Typography variant='h6' fontWeight='bold' align='center'>
                  {product.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 5,
                    paddingBottom: 2,
                  }}>
                  <Typography variant='h5' color='error' fontWeight='bold' align='center'>
                    {product.price}₴
                  </Typography>
                  <Typography align='center'>Кількість: {product.quantity}</Typography>
                </Box>

                <Button color='success' sx={{ fontWeight: "bold" }}>
                  <ShoppingCartIcon color='success' />
                  Готовий до відправки
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products_previe;
