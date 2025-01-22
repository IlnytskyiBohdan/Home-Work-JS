import { Box, Container, Typography } from "@mui/material";
import Link from "../Link/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
        >
          Contacts:
        </Typography>

        <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
          <Link to="mailto:neklz1@icloud.com">Email: neklz1@icloud.com</Link>
          <Link to="tel:+380966322331">Tel: +380966322331</Link>
          <Typography
            component="a"
            href="https://www.linkedin.com/in/bohdan-ilnytskyi-13155b335/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "inherit", "&:hover": { color: "orange" } }}
          >
            LinkedIn: Bohdan Ilnytskyi
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
