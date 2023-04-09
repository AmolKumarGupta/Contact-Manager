import { Box } from "@mui/material";
import Modal from "./Modal";

export default function TestModal({ name, open, handleClose }) {
  function Template() {
    return <Box>Text</Box>;
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
