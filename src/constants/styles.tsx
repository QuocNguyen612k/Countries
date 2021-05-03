import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1%",
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    logo: {
      width: "80%",
      marginTop: "15%",
      marginBottom: "3%",
    },
    centerWrapper: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      maxHeight: "50%",
    },
    searchField: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: 25,
    },
    resultsList: { flex: 1, alignSelf: "stretch" },
    resultsBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "auto",
      flex: "1",
      maxHeight: "60vh",
      marginTop: theme.spacing(0.5),
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    noticeIcon: {
      fontSize: 80,
    },
    noticeCard: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      flexDirection: "column" as "column",
      backgroundColor: "inherit",
      minHeight: "40vh",
    },
    bold: {
      fontWeight: 600,
    },
    flagImg: {
      width: "40%",
      border: "1px solid",
    },
    searchBar: { flex: 1, marginLeft: "1%", padding: theme.spacing(1) },

    centerCell: { textAlign: "center" },
    centerImgWrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    leftCell: {
      textAlign: "left",
    },
    centerBold: { paddingLeft: "40%", fontWeight: 600 },
    center: {
      paddingLeft: "45%",
    },
    detailWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "auto",
      maxHeight: "90%",
      marginTop: "10%",
      marginBottom: "10%",
      flex: "1",
      backgroundColor: "white",
      opacity: "0.9",
    },
  })
);
