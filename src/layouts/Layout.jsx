import { Box, Button, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Layout({ children }) {
  return (
    <Container>
      <Box
        sx={{
          p: 2,
          mt: 1,
          mb: 2,
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#03a9f405",
        }}
      >
        <Typography variant="h1" fontSize="2rem" color="">
          Contacts
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="small"
          color="success"
        >
          Add
        </Button>
      </Box>
      {children}
    </Container>
  );
}
