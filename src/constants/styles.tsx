import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1%",
  },
  bold: {
    fontWeight: 600,
  },
  img: {
    maxWidth: "40%",
  },
});
