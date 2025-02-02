import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/sliceUser";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Box } from "@mui/material";
import { useEffect } from "react";
import InputText from "../InputText/InputText";
import InputPassword from "../InputPassword/InputPassword";
import CustomButton from "../Buttons/CustomButton/CustomButton";

const LoginForm = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/products-table");
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Paper sx={{ padding: 4, borderRadius: 3, textAlign: "center", width: 400 }}>
        <Box component='img' src='/logoForm.svg' alt='Logo' sx={{ mb: 8 }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label='User Name'
            name='userName'
            register={register}
            errors={errors}
            sx={{ mb: 5 }}
          />
          <InputPassword register={register} errors={errors} sx={{ mb: 8 }} />
          {error && <Box sx={{ color: "red", mb: 2 }}>{error}</Box>}
          <CustomButton type='submit' loading={loading}>
            Login
          </CustomButton>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
