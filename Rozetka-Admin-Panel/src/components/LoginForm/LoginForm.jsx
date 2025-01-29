import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Paper, Box, Alert } from "@mui/material";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const user = users.find(
        (user) => user.username === data.username && user.password === data.password
      );

      if (user) {
        console.log("Login successful:", user);
        navigate("/products-table");
      } else {
        setLoginError("Invalid user name or password");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoginError("Server error. Try again later.");
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "750px",
      }}>
      <Paper elevation={20} sx={{ padding: 3, textAlign: "center" }}>
        <Box sx={{ padding: "40px" }}>
          <Box component='img' src='/logoForm.svg' alt='Logo' />
          {loginError && <Alert severity='error'>{loginError}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label='User Name'
              variant='outlined'
              margin='normal'
              {...register("username", { required: "User Name is required" })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              variant='outlined'
              margin='normal'
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              fullWidth
              type='submit'
              variant='contained'
              sx={{
                mt: 4,
                background: "green",
                fontSize: "30px",
                textTransform: "none",
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
              }}>
              Login
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
