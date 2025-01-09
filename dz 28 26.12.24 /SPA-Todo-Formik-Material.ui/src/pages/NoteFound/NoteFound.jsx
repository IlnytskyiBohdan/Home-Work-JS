import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function NoteFound() {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "10%",
      }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 3 }}
        component={Link}
        to="/"
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default NoteFound;