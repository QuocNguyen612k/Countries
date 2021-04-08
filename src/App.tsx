import { CssBaseline, Container } from "@material-ui/core";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: "#cfe8fc" }}>
        <Logo />
        <Search />
      </Container>
    </>
  );
}

export default App;
