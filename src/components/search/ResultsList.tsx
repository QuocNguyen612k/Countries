import Avatar from "@material-ui/core/Avatar";
import { COUNTRIES_DEFAULT } from "../../constants/routes";
import { Country } from "../../context/countries";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../constants/styles";

interface Props {
  countriesList: Country[];
}

export default function ResultsList({ countriesList }: Props) {
  const history = useHistory();
  const classes = useStyles();
  const handleClick = (e: React.MouseEvent<HTMLElement>, name: string) => {
    e.preventDefault();
    history.push(`${COUNTRIES_DEFAULT}/${name}`);
  };
  return (
    <List className={classes.resultsList}>
      {countriesList.map((country) => {
        return (
          <ListItem
            button
            key={country.name}
            onMouseDown={(e) => handleClick(e, country.name)}
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
