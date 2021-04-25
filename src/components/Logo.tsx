import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "../constants/styles";

const Logo = () => {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      alt="App name"
      image={`${process.env.PUBLIC_URL}/images/logoText2.png`}
      title="App name"
      className={classes.logo}
    />
  );
};

export default Logo;
