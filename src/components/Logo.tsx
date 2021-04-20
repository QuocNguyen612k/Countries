import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
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
