import * as ROUTES from "../constants/routes";
import { CountriesContext, Country } from "../context/countries";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryDetail } from "../pages";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const countries = useContext(CountriesContext) as Country[];
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Country[]>([]);

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
        <Route exact path={`/Countries`}>
          <>
            <SearchBar
              searchText={searchText}
              handleSearchChange={handleSearchChange}
            />
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
