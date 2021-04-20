import { Container, CssBaseline } from "@material-ui/core";
import { CountriesContext, Country } from "./context/countries";
import { useEffect, useState } from "react";
import { CountriesSearch } from "./pages";
import axios from "axios";
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
      <Container maxWidth="lg" className={classes.root}>
        <CountriesContext.Provider value={countries}>
          <CountriesSearch />
        </CountriesContext.Provider>
      </Container>
    </>
  );
}
