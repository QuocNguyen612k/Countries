import CardMedia from "@material-ui/core/CardMedia";

const Logo = () => {
  return (
    <CardMedia
      component="img"
      alt="App name"
      image={`${process.env.PUBLIC_URL}/images/countries.png`}
      title="App name"
      style={{
        paddingTop: "3%",
        maxWidth: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
};

export default Logo;
