import * as ROUTES from "../constants/routes";
import { CountriesContext, Country } from "../context/countries";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryDetail } from "../pages";
import Results from "../components/search/Results";
import SearchBar from "../components/search/SearchBar";
import { useStyles } from "../constants/styles";
import { AppBar, Box, Container, Typography } from "@material-ui/core";

const Search = () => {
  const countries = useContext(CountriesContext) as Country[];
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Country[]>([]);
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

  return (
    <Router>
      <Switch>
        <Route exact path={`${ROUTES.COUNTRIES_DEFAULT}`}>
          <>
            <AppBar position="static" className={classes.appBar}>
              <Box>
                <Typography variant="h4">Countries</Typography>
              </Box>
            </AppBar>
            <Container maxWidth="xl" className={classes.centerWrapper}>
              <SearchBar
                searchText={searchText}
                handleSearchChange={handleSearchChange}
              />
              <Results countriesList={results} searchText={searchText} />
            </Container>
          </>
        </Route>
        <Route exact path={`${ROUTES.COUNTRY_DETAIL}/:name`}>
          <CountryDetail />
        </Route>
      </Switch>
    </Router>
  );
};
export default Search;
