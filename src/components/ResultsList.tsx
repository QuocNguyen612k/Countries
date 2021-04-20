import Avatar from "@material-ui/core/Avatar";
import { COUNTRY_DETAIL } from "../constants/routes";
import { Country } from "../context/countries";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

interface Props {
  countriesList: Country[];
}

export default function ResultsList({ countriesList }: Props) {
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLElement>, name: string) => {
    e.preventDefault();
    history.push(`${COUNTRY_DETAIL}/${name}`);
  };
  return (
    <List style={{ flex: 1, alignSelf: "stretch" }}>
      {countriesList.map((country) => {
        return (
          <ListItem
            button
            key={country.name}
            onClick={(e) => handleClick(e, country.name)}
          >
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
