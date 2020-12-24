import "./App.css";
import { Container } from "react-bootstrap";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Context";

function App() {
  return (
    <Provider>
      <Navbar />
      <Container>
        <ItemList />
      </Container>
    </Provider>
  );
}

export default App;
