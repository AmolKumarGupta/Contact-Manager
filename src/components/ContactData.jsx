import { useContext, useEffect, useMemo, useState } from "react";
import { FireStoreContext } from "../main";
import { showDetailsContext } from "./ContactTemplate";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  capitalize,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { doc, getDoc } from "firebase/firestore";

export default function ContactData({ id }) {
  const setShowDetails = useContext(showDetailsContext);
  const db = useContext(FireStoreContext);
  const [details, setDetails] = useState({});
  const detailElement = function () {
    let data = [];
    for (const [key, val] of Object.entries(details)) {
      data.push(
        <ListItem divider key={key}>
          <Stack direction="row" spacing={4}>
            <Chip color="primary" label={key} />
            <Chip label={val} />
          </Stack>
        </ListItem>
      );
    }
    return <List sx={{ mx: 4 }}>{data}</List>;
  };

  useEffect(() => {
    (async function () {
      const docRef = doc(db, "contacts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDetails(docSnap.data());
      } else {
        setDetails({});
      }
    })();

    return () => {
      setDetails({});
    };
  }, [id, db]);

  return (
    <Card>
      <CardActions>
        <IconButton onClick={() => setShowDetails(null)}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="h1"
          sx={{ mx: 1, textTransform: "capitalize" }}
        >
          {details.name}
        </Typography>
      </CardActions>
      <CardContent>{detailElement()}</CardContent>
    </Card>
  );
}
