import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";

export default function AddModal({ name, open, handleClose }) {
  function Template() {
    const [values, setValues] = useState({
      name: "",
      email: "",
    });

    return (
      <Box>
        <Typography
          sx={{ m: 4, mt: 3, mb: 2 }}
          color="primary"
          fontWeight="600"
        >
          Add Contact
        </Typography>
        <Divider />
        <Stack spacing={2} sx={{ m: 4, mt: 2 }}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            value={values?.name}
            onChange={(event) => {
              setValues((obj) => {
                return { ...obj, name: event.target.value };
              });
            }}
          />
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            value={values?.email}
            onChange={(event) => {
              setValues((obj) => {
                return { ...obj, email: event.target.value };
              });
            }}
          />
          <Button variant="contained">Create</Button>
        </Stack>
      </Box>
    );
  }

  return (
    <Modal
      Component={Template}
      name={name}
      open={open}
      handleClose={handleClose}
    />
  );
}
