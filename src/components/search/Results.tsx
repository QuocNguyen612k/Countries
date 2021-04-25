import Box from "@material-ui/core/Box";
import { Country } from "../../context/countries";
import Notice from "./Notice";
import React from "react";
import ResultsList from "./ResultsList";
import { useStyles } from "../../constants/styles";

interface Props {
  countriesList: Country[];
  searchText: string;
}

const Results = ({ countriesList, searchText }: Props) => {
  const classes = useStyles();
  const hasSearchText = !!searchText;
  const tooManyMatches = countriesList.length > 10;
  const hasNoResults = countriesList.length === 0;

  return (
    <Box className={classes.resultsBox}>
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
