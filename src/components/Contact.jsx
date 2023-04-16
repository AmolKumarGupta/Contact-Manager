import { Box, Card, Typography, capitalize } from "@mui/material";
import { useContext } from "react";
import { showDetailsContext } from "./ContactTemplate";

export default function Contact({ data }) {
  const setShowDetails = useContext(showDetailsContext);

  return (
    <Card
      elevation={2}
      sx={{
        px: 3,
        py: 2,
        cursor: "pointer",
      }}
      onClick={() => {
        setShowDetails(data._id);
      }}
    >
      <Typography fontWeight="bold" sx={{ textTransform: "capitalize" }}>
        {data.name}
      </Typography>
    </Card>
  );
}
