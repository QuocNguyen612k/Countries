import SearchBar from "./SearchBar";
import Results from "./Results";
import { Country } from "./CountryDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(res.data as Country[]);
    };
    fetchAllCountries();
  }, []);

  const handleSearchChange = (input: string) => {
    setSearchText(input);
    console.log(searchText);
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
      <Results countriesList={countries} />
    </>
  );
};
export default Search;
