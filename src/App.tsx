import { CountriesSearch, CountryDetail } from "./pages";
import * as ROUTES from "./constants/routes";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesContext, Country } from "./context/countries";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";

const useStylesContainer = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1%",
  },
}));

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const classesContainer = useStylesContainer();

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(res.data as Country[]);
    };
    fetchAllCountries();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classesContainer.root}>
        <CountriesContext.Provider value={countries}>
          <Router>
            <Switch>
              <Route exact path={ROUTES.DEFAULT}>
                <Redirect to="/Countries" />
              </Route>
              <Route
                exact
                path={[ROUTES.COUNTRIES_SEARCH, ROUTES.COUNTRIES_DEFAULT]}
              >
                <CountriesSearch />
              </Route>
              <Route exact path={ROUTES.COUNTRY_DETAIL}>
                <CountryDetail />
              </Route>
            </Switch>
          </Router>
        </CountriesContext.Provider>
      </Container>
    </>
  );
}
