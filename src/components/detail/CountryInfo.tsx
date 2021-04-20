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
      <TableCell align="left" className={classes.bold}>
        {name}
      </TableCell>
      <TableCell align="left">{info}</TableCell>
    </TableRow>
  );
}
