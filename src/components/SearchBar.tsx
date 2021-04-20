import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

interface Props {
  searchText: string;
  handleSearchChange: (input: string) => void;
}

const SearchBar = ({ searchText, handleSearchChange }: Props) => {
  return (
    <Paper component="form" style={{ display: "flex" }}>
      <InputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search " }}
        style={{ flex: 1, marginLeft: 10 }}
        value={searchText}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    // <TextField
    //   className={classes.search}
    //   variant="outlined"
    //   id={`${panelName}-filter`}
    //   label={t(`Filter ${panelName}`)}
    //   name={`${panelName}-filter`}
    //   type="search"
    //   value={filter}
    //   onChange={(event) => handleSearchTextChange(event.target.value)}
    //   // size="small"
    ///>
  );
};

export default SearchBar;
