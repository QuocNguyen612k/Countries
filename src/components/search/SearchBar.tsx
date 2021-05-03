import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../../constants/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {
  searchText: string;
  handleSearchChange: (input: string) => void;
  changeFocus: (status: boolean) => void;
}

const SearchBar = ({ searchText, handleSearchChange, changeFocus }: Props) => {
  const classes = useStyles();

  return (
    <InputBase
      className={classes.searchBar}
      inputProps={{ "aria-label": "search " }}
      value={searchText}
      onChange={(e) => handleSearchChange(e.target.value)}
      onFocus={() => changeFocus(true)}
      onBlur={() => changeFocus(false)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon color="disabled" />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
