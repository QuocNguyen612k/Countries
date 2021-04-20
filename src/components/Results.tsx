import Box from "@material-ui/core/Box";
import { Country } from "../context/countries";
import Notice from "./Notice";
import React from "react";
import ResultsList from "./ResultsList";

interface Props {
  countriesList: Country[];
  searchText: string;
}
const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    overflow: "auto",
    flex: "1",
  },
};

const Results = ({ countriesList, searchText }: Props) => {
  const hasSearchText = !!searchText;
  const tooManyMatches = countriesList.length > 10;
  const hasNoResults = countriesList.length === 0;

  return (
    <Box style={styles.box}>
      {hasSearchText ? (
        tooManyMatches ? (
          <Notice info="Many Matches" />
        ) : hasNoResults ? (
          <Notice info="No Results" />
        ) : (
          <ResultsList countriesList={countriesList} />
        )
      ) : (
        <Notice info="Empty Search" />
      )}
    </Box>
  );
};

export default React.memo(Results);
