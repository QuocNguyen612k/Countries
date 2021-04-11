import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Footer from "./components/Footer";

const useStylesContainer = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1%",
  },
}));

export default function App() {
  const classesContainer = useStylesContainer();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classesContainer.root}>
        <Logo />
        <Search />
        <Footer />
      </Container>
    </>
  );
}
