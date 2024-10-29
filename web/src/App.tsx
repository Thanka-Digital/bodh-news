import { Container } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Container fluid h={50} bg="var(--mantine-color-blue-light)">
          Fluid container has 100% max-width
        </Container>
        <p className="text-xl text-red-300">hello</p>
      </div>
    </>
  );
}

export default App;
