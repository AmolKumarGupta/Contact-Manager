import React, { Suspense } from "react";

export default function ContactDetail({ id }) {
  const ContactData = React.lazy(() => import("./ContactData"));

  return (
    <Suspense fallback={<h4>Loading</h4>}>
      <ContactData id={id} />
    </Suspense>
  );
}
