import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "../../constants/styles";

interface Props {
  name: string;
  img: string;
}

export default function FlagImg({ name, img }: Props) {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell align="center" colSpan={2}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <CardMedia
            component="img"
            alt={`${name}'s flag`}
            image={img}
            title={`${name}'s flag`}
            className={classes.img}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
}
