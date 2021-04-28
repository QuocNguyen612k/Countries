import { Currencies } from "../../context/countries";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import { useStyles } from "../../constants/styles";

interface Props {
  currencies: Currencies[];
}
export default function CountryCurrencies({ currencies }: Props) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.leftCell}>
        <Typography variant="body2" className={classes.centerBold}>
          Currencies
        </Typography>
      </TableCell>
      <TableCell className={classes.leftCell}>
        {currencies.map((currency) => (
          <Typography
            key={currency.name}
            variant="body2"
            className={classes.center}
          >
            {`- ${currency.name} (${currency.symbol}) (${currency.code}) `}
          </Typography>
        ))}
      </TableCell>
    </TableRow>
  );
}
