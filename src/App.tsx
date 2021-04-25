import { CssBaseline, Box } from "@material-ui/core";
import { CountriesContext, Country } from "./context/countries";
import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesSearch } from "./pages";
import { useStyles } from "./constants/styles";

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const classes = useStyles();

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
      <Box className={classes.root}>
        <CountriesContext.Provider value={countries}>
          <CountriesSearch />
        </CountriesContext.Provider>
      </Box>
    </>
  );
}
