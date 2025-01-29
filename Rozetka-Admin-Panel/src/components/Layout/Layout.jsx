import { Header } from "@components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Container, CssBaseline, Box } from "@mui/material";

const Layout = () => {
  const location = useLocation();
  return (
    <Box sx={{ padding: "30px", backgroundColor: "green", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname !== "/login" && <Header />}
      <Container component='main'>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
