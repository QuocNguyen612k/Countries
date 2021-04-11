import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Logo from "./components/Logo";
import Search from "./components/Search";

const useStylesContainer = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
      </Container>
    </>
  );
}
