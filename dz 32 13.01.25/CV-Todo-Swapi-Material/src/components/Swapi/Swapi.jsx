import { Box, Typography } from "@mui/material";
import Form from "../Form/Form";
import Card from "../Card/Card";

const Swapi = () => {
  return (
    <Box sx={{ alignItems: "center", maxWidth: 600, mx: "auto" }}>
      <Typography
        variant="h5"
        mb={2}
        mt={4}
      >
        Swapi
      </Typography>
      <Form />
      <Card />
    </Box>
  );
};

export default Swapi;
