import * as ROUTES from "../constants/routes";
import { CountriesContext, Country } from "../context/countries";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryDetail } from "../pages";
import Results from "../components/search/Results";
import SearchBar from "../components/search/SearchBar";
import { useStyles } from "../constants/styles";
import { AppBar, Box } from "@material-ui/core";
import Logo from "../components/Logo";

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
        <Route exact path={`/countries`}>
          <>
            <AppBar position="static">
              <Logo />
              <Box className={classes.searchBarWrapper}>
                <SearchBar
                  searchText={searchText}
                  handleSearchChange={handleSearchChange}
                />
              </Box>
            </AppBar>
            <Results countriesList={results} searchText={searchText} />
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
