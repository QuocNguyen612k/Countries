import SearchBar from "./SearchBar";
import Results from "./Results";
import { Country } from "./CountryDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(res.data as Country[]);
    };
    fetchAllCountries();
  }, []);

  return (
    <>
      <SearchBar />
      <Results />
    </>
  );
};
export default Search;
