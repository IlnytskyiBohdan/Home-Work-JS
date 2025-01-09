import { Button } from '@mui/material';

export default function CustomButton({ children, disabled, ...props }) {
  return (
    <Button
      {...props}
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
}