import Container from "./Components/Container";
import Header from "./Components/Header";
import { useApi } from "../ContextApi";

import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}

export default App;
