import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchBar = () => {
  return (
    <Paper component="form" style={{ display: "flex" }}>
      <InputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search " }}
        style={{ flex: 1, marginLeft: 10 }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
