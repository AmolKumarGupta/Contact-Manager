import { Box, Card, Typography } from "@mui/material";

export default function Contact({ data }) {
  return (
    <Card
      elevation={2}
      sx={{
        px: 3,
        py: 1,
      }}
    >
      <Typography fontWeight="bold">{data.name}</Typography>
    </Card>
  );
}
