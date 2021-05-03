import { Languages } from "../../context/countries";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import { useStyles } from "../../constants/styles";

interface Props {
  languages: Languages[];
}
export default function CountryLanguages({ languages }: Props) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.leftCell}>
        <Typography variant="body2" className={classes.centerBold}>
          Languages
        </Typography>
      </TableCell>
      <TableCell className={classes.leftCell}>
        {languages.map((language) => (
          <Typography
            key={language.name}
            variant="body2"
            className={classes.center}
          >
            - {language.name}
          </Typography>
        ))}
      </TableCell>
    </TableRow>
  );
}
