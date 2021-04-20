import { CountriesContext, Country } from "../context/countries";
import CountryInfo from "../components/detail/CountryInfo";
import CountryName from "../components/detail/CountryName";
import FlagImg from "../components/detail/FlagImg";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { useContext } from "react";
import { useParams } from "react-router-dom";

interface MatchParams {
  name: string;
}

export default function CountryDetail() {
  const countries = useContext(CountriesContext) as Country[];

  const { name } = useParams<MatchParams>();

  const filter = countries.find((country) => country.name === name);

  const country = filter as Country;

  return (
    <>
      {filter !== undefined && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <CountryName name={country.name} />
            </TableHead>
            <TableBody>
              <FlagImg name={country?.name} img={country.flag} />
              <CountryInfo name="Capital" info={country.capital} />
              <CountryInfo name="Population" info={"" + country.population} />
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
