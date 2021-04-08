import { CssBaseline, Container } from "@material-ui/core";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: "#cfe8fc" }}>
        <Logo />
      </Container>
    </>
  );
}

export default App;
