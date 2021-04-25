import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../../constants/styles";

interface Props {
  searchText: string;
  handleSearchChange: (input: string) => void;
}

const SearchBar = ({ searchText, handleSearchChange }: Props) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.searchField}>
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search " }}
        className={classes.search}
        value={searchText}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </Paper>
  );
};

export default SearchBar;
