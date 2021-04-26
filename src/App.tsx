import { CssBaseline, Box } from "@material-ui/core";
import { CountriesContext, Country } from "./context/countries";
import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesSearch } from "./pages";
import { useStyles } from "./constants/styles";
import Logo from "./components/Logo";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios("https://restcountries.eu/rest/v2/all");
      setCountries(res.data as Country[]);
    };
    setTimeout(() => fetchAllCountries(), 1000);
  }, []);
  const isLoading = countries.length === 0;
  return (
    <>
      <CssBaseline />
      <CountriesContext.Provider value={countries}>
        {isLoading ? (
          <Logo />
        ) : (
          <Box className={classes.root}>
            <CountriesSearch />
          </Box>
        )}
      </CountriesContext.Provider>
    </>
  );
}
