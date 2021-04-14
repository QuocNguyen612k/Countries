import Search from "../containers/Search";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import Logo from "../components/Logo";
const useStylesContainer = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1%",
  },
}));
export default function CountriesSearch() {
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
