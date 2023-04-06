import Layout from "./layouts/Layout";
import "./app.css";
import ContactGrid from "./components/ContactGrid";

const test = [
  {
    id: 1,
    name: "test",
    email: "test@gmail.com",
    rating: 5,
  },
  {
    id: 2,
    name: "amol",
    email: "amol@gmail.com",
    rating: 4,
  },
];

function App() {
  return (
    <Layout>
      <ContactGrid data={test} />
    </Layout>
  );
}

export default App;
