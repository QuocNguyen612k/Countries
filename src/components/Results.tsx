import Box from "@material-ui/core/Box";
import { Country } from "./CountryDetail";
import ResultsList from "./ResultsList";

interface Props {
  countriesList: Country[];
}

const Results = ({ countriesList }: Props) => {
  return (
    <Box
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        height: "70%",
        overflow: "auto",
      }}
    >
      <ResultsList countriesList={countriesList} />
    </Box>
  );
};

export default Results;
