import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import { Country } from "../components/CountryDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Country[]>([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(res.data as Country[]);
    };
    fetchAllCountries();
  }, []);

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
