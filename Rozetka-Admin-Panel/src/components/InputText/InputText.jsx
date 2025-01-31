import { TextField } from "@mui/material";

const InputText = ({ label, name, register, errors, sx }) => {
  return (
    <TextField
      fullWidth
      label={label}
      {...register(name, { required: `${label} is required` })}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      sx={{ ...sx }}
    />
  );
};

export default InputText;
