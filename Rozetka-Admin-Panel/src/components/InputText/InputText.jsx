import { TextField } from "@mui/material";

const InputText = ({ label, name, register, errors, sx, validation, multiline, minRows }) => {
  return (
    <TextField
      fullWidth
      label={label}
      // {...register(name, { required: `${label} is required` })}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      sx={{ ...sx }}
      {...register(name, validation)}
      multiline={multiline}
      minRows={multiline ? minRows : undefined}
    />
  );
};

export default InputText;
