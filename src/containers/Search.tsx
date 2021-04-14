import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { useEffect, useState, useContext } from "react";
import { CountriesContext, Country } from "../context/countries";

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
    <>
      <SearchBar
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
      <Results countriesList={results} searchText={searchText} />
    </>
  );
};
export default Search;
