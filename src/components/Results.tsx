import Box from "@material-ui/core/Box";
import { Country } from "./CountryDetail";
import ResultsList from "./ResultsList";

interface Props {
  countriesList: Country[];
  searchText: string;
}

const Results = ({ countriesList, searchText }: Props) => {
  const hasSearchText = !!searchText;
  const tooManyMatches = countriesList.length > 10;
  const hasNoResults = countriesList.length === 0;
  return (
    <Box
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        height: "70%",
        overflow: "auto",
      }}
    >
      {hasSearchText ? (
        tooManyMatches ? (
          <h1>Too many matches</h1>
        ) : hasNoResults ? (
          <h1>No matches</h1>
        ) : (
          <ResultsList countriesList={countriesList} />
        )
      ) : (
        <h1>type sth to begin</h1>
      )}
    </Box>
  );
};

export default Results;
