import { CardMedia, Box } from "@material-ui/core";
import { useStyles } from "../constants/styles";

const Logo = () => {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      alt="App name"
      image={`${process.env.PUBLIC_URL}/images/countries.png`}
      title="App name"
      className={classes.logo}
    />
  );
};

export default Logo;
