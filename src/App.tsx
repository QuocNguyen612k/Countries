import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Logo from "./components/Logo";
import Search from "./components/Search";

const useStylesContainer = makeStyles(() => ({
  root: {
    height: "100vh",
  },
}));

export default function App() {
  const classesContainer = useStylesContainer();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classesContainer.root}>
        <Logo />
        <Search />
      </Container>
    </>
  );
}
