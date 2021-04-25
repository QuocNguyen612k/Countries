import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "../constants/styles";

const Logo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.centerImgWrapper}>
      <CardMedia
        component="img"
        alt="App name"
        image={`${process.env.PUBLIC_URL}/images/countries.png`}
        title="App name"
        style={{
          maxWidth: "50%",
        }}
      />
    </Box>
  );
};

export default Logo;
