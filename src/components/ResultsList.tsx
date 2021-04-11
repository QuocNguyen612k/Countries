import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Country } from "./CountryDetail";

interface Props {
  countriesList: Country[];
}

export default function ResultsList({ countriesList }: Props) {
  return (
    <List>
      {countriesList.map((country) => {
        return (
          <ListItem button key={country.name}>
            <ListItemAvatar>
              <Avatar alt="flag" src={country.flag} />
            </ListItemAvatar>
            <ListItemText primary={country.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
