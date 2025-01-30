import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/sliceUser";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Paper,
  Box,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/products-table");
    }
  };

  return (
    <Container
      sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ padding: 4, borderRadius: 3, textAlign: "center", width: 400 }}>
        <Box component='img' src='/logoForm.svg' alt='Logo' sx={{ mb: 8 }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label='User Name'
            {...register("userName", { required: "User Name is required" })}
            error={!!errors.userName}
            helperText={errors.userName?.message}
            sx={{ mb: 5 }}
          />
          <TextField
            fullWidth
            label='Password'
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 8 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleTogglePassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && <Box sx={{ color: "red", mb: 2 }}>{error}</Box>}
          <Button
            fullWidth
            type='submit'
            variant='contained'
            color='success'
            disabled={loading}
            sx={{
              mt: 3,
              mb: 3,
              fontSize: "20px",
              fontWeight: "600",
              padding: "12px",
              borderRadius: "6px",
              textTransform: "none",
            }}>
            {loading ? <CircularProgress size={24} color='success' /> : "Login"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;

