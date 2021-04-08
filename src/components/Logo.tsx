import CardMedia from "@material-ui/core/CardMedia";

const Logo = () => {
  return (
    <CardMedia
      component="img"
      alt="App name"
      image={`${process.env.PUBLIC_URL}/images/countries.png`}
      title="App name"
    />
  );
};

export default Logo;
