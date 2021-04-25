import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../constants/styles";

interface Props {
  name: string;
}
export default function CountryName({ name }: Props) {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.centerCell} colSpan={2}>
        <Typography variant="h5" className={classes.bold}>
          {name}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
