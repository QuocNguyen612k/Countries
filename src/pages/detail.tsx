import { CountriesContext, Country } from "../context/countries";
import CountryInfo from "../components/detail/CountryInfo";
import CountryLanguages from "../components/detail/CountryLanguages";
import CountryName from "../components/detail/CountryName";
import FlagImg from "../components/detail/FlagImg";
import {
  AppBar,
  Button,
  Table,
  TableBody,
  TableHead,
  Typography,
  Box,
} from "@material-ui/core/";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useStyles } from "../constants/styles";

interface MatchParams {
  name: string;
}

export default function CountryDetail() {
  const countries = useContext(CountriesContext) as Country[];
  const history = useHistory();
  const classes = useStyles();

  const { name } = useParams<MatchParams>();

  const filter = countries.find(
    (country) => country.name.replace(/\s/g, "") === name.replace(/\s/g, "")
  );

  const country = filter as Country;

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {filter !== undefined && (
        <>
          <AppBar
            position="static"
            color="primary"
            className={classes.detailAppBar}
          >
            <Button onClick={goBack}>
              <ArrowBackIcon className={classes.goBackButton} />
            </Button>
            <Typography variant="h6" color="inherit">
              {country.name}
            </Typography>
          </AppBar>
          <Box className={classes.detailWrapper}>
            <Table>
              <TableHead>
                <CountryName name={country.name} />
              </TableHead>
              <TableBody>
                <FlagImg name={country.name} img={country.flag} />
                <CountryInfo name="Capital" info={country.capital} />
                <CountryInfo name="Population" info={`${country.population}`} />
                <CountryLanguages languages={country.languages} />
              </TableBody>
            </Table>
          </Box>
        </>
      )}
    </>
  );
}
