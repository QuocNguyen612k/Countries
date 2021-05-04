import * as ROUTES from "../constants/routes";
import { CountriesContext, Country } from "../context/countries";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryDetail } from "../pages";
import Results from "../components/search/Results";
import SearchBar from "../components/search/SearchBar";
import { useStyles } from "../constants/styles";
import { Container, Grid, Paper, Divider } from "@material-ui/core";
import Logo from "../components/Logo";

const Search = () => {
  const countries = useContext(CountriesContext) as Country[];
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Country[]>([]);
  const [focus, setFocus] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setResults(filteredCountries);
  }, [searchText, countries]);

  const handleSearchChange = (input: string) => {
    setSearchText(input);
  };

  const changeFocus = (status: boolean) => {
    setFocus(status);
  };

  return (
    <Router>
      <Switch>
        <Route exact path={`${ROUTES.COUNTRIES_DEFAULT}`}>
          <>
            <Container maxWidth="sm" className={classes.centerWrapper}>
              <Grid container justify="center">
                <Logo />
              </Grid>
              <Paper
                component="form"
                elevation={2}
                className={classes.searchField}
              >
                <SearchBar
                  searchText={searchText}
                  handleSearchChange={handleSearchChange}
                  changeFocus={changeFocus}
                />
                {focus ? (
                  <>
                    <Divider />
                    <Results countriesList={results} searchText={searchText} />
                  </>
                ) : (
                  <></>
                )}
              </Paper>
            </Container>
          </>
        </Route>
        <Route exact path={`${ROUTES.COUNTRIES_DEFAULT}/:name`}>
          <CountryDetail />
        </Route>
      </Switch>
    </Router>
  );
};
export default Search;
