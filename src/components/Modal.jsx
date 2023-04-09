import { Card, CardContent, Fade } from "@mui/material";
import BaseModal from "@mui/material/Modal";

export default function Modal({ Component, name, open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <BaseModal
      open={open}
      onClose={handleClose}
      aria-labelledby={`${name}ModelLabel`}
      aria-describedby={`${name}ModelDescribe`}
    >
      <Fade in={open}>
        <Card sx={style}>
          <Component />
        </Card>
      </Fade>
    </BaseModal>
  );
}
