import { useStyles } from "../../constants/styles";
import {
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from "@material-ui/core/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
interface Props {
  name: string;
}

export default function CountryName({ name }: Props) {
  const classes = useStyles();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <TableRow>
      <TableCell colSpan={2}>
        <IconButton size="small" edge="start" onClick={goBack}>
          <ArrowBackIosIcon color="disabled" />
          <Typography variant="body1" display="inline">
            Go back
          </Typography>
        </IconButton>
        <Typography variant="h5" className={classes.bold}>
          {name}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
