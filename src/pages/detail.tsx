import { CountriesContext, Country } from "../context/countries";
import CountryInfo from "../components/detail/CountryInfo";
import CountryArrInfo from "../components/detail/CountryArrInfo";
import CountryLanguages from "../components/detail/CountryLanguages";
import CountryCurrencies from "../components/detail/CountryCurrencies";
import CountryName from "../components/detail/CountryName";
import FlagImg from "../components/detail/FlagImg";
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  Container,
  Paper,
} from "@material-ui/core/";
import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useStyles } from "../constants/styles";

interface MatchParams {
  name: string;
}

export default function CountryDetail() {
  const countries = useContext(CountriesContext) as Country[];
  // const history = useHistory();
  const classes = useStyles();
  const { name } = useParams<MatchParams>();

  const filter = countries.find(
    (country) => country.name.replace(/\s/g, "") === name.replace(/\s/g, "")
  );

  const country = filter as Country;

  // const goBack = () => {
  //   history.goBack();
  // };

  return (
    <>
      {filter !== undefined && (
        <>
          <Container
            maxWidth="sm"
            style={{
              display: "flex",
              flex: 1,
              maxHeight: "100vh",
              flexDirection: "column",
            }}
          >
            <TableContainer component={Paper} className={classes.detailWrapper}>
              <Table>
                <TableHead>
                  <CountryName name={country.name} />
                </TableHead>
                <TableBody>
                  <FlagImg name={country.name} img={country.flag} />
                  <CountryInfo name="Capital" info={country.capital} />
                  <CountryInfo
                    name="Population"
                    info={`${country.population}`}
                  />
                  <CountryInfo name="Area" info={`${country.area} \u33A2`} />
                  <CountryInfo name="Region" info={country.region} />
                  <CountryInfo name="Subregion" info={country.subregion} />
                  <CountryLanguages languages={country.languages} />
                  <CountryCurrencies currencies={country.currencies} />
                  <CountryArrInfo name="Timezones" info={country.timezones} />
                  <CountryArrInfo
                    name="Calling codes"
                    info={country.callingCodes}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </>
      )}
    </>
  );
}
