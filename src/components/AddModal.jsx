import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "./Modal";
import { useContext, useState } from "react";
import { red } from "@mui/material/colors";
import { createDoc } from "../firestore/doc";
import { refreshContactContext } from "../App";

function ErrorHolder({ msg }) {
  return msg && <Typography color={red[500]}>{msg}</Typography>;
}

export default function AddModal({ name, open, handleClose }) {
  const [refresh, setRefresh] = useContext(refreshContactContext);

  function Template() {
    const [values, setValues] = useState({
      name: "",
      email: "",
    });
    const [error, setError] = useState();

    function add() {
      if (!values.name || !values.email) {
        setError("Please fill the form");
        return;
      }
      setError(null);
      createDoc(values);
      setValues({ name: "", email: "" });
      setRefresh(Math.random());
      handleClose();
    }

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
          <ErrorHolder msg={error} />
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
          <Button variant="contained" onClick={add}>
            Create
          </Button>
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
