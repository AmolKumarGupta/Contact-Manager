import { useMemo } from "react";
import Contact from "./Contact";
import { Stack } from "@mui/material";

export default function ContactGrid({ data }) {
  const contacts = useMemo(() => {
    return data.map((item) => <Contact data={item} key={item._id} />);
  }, [data]);

  return (
    <Stack sx={{ mx: 2 }} spacing={2}>
      {contacts}
    </Stack>
  );
}
