import { CardMedia, Box } from "@material-ui/core";
import { useStyles } from "../constants/styles";

const Logo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loadingPage}>
      <Box className={classes.logoWrapper}>
        <CardMedia
          component="img"
          alt="App name"
          image={`${process.env.PUBLIC_URL}/images/logo.png`}
          title="App name"
          className={classes.logo}
        />
      </Box>
    </Box>
  );
};

export default Logo;
