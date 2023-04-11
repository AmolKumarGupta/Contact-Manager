import Layout from "./layouts/Layout";
import "./app.css";
import ContactTemplate from "./components/ContactTemplate";
import { createContext, useState } from "react";

export const refreshContactContext = createContext([]);

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <refreshContactContext.Provider value={[refresh, setRefresh]}>
      <Layout>
        <ContactTemplate />
      </Layout>
    </refreshContactContext.Provider>
  );
}

export default App;
