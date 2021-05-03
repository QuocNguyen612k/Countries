import { Typography } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "../../constants/styles";
interface Props {
  name: string;
  info: string;
}
export default function CountryInfo({ name, info }: Props) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.leftCell}>
        <Typography variant="body2" className={classes.centerBold}>
          {name}
        </Typography>
      </TableCell>
      <TableCell className={classes.leftCell}>
        <Typography variant="body2" className={classes.center}>
          - {info}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
