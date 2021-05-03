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
    },
    logo: {
      width: "70%",
      marginTop: "25%",
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
      maxHeight: "50vh",
      marginTop: theme.spacing(0.5),
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    noticeIcon: {
      fontSize: 100,
    },
    noticeCard: {
      display: "flex",
      alignItems: "center",
      boxShadow: "none",
      flexDirection: "column" as "column",
      backgroundColor: "inherit",
    },
    bold: {
      fontWeight: 600,
    },
    flagImg: {
      width: "40%",
      border: "1px solid",
    },
    searchBar: { flex: 1, marginLeft: "1%", padding: theme.spacing(1) },

    appBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "10%",
      backgroundColor: "#1976d2",
    },

    centerCell: { textAlign: "center" },
    centerImgWrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    leftCell: {
      textAlign: "left",
    },
    centerBold: { paddingLeft: "23%", fontWeight: 600 },
    center: {
      paddingLeft: "40%",
    },
    detailWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      overflow: "auto",
      flex: "1",
    },
    detailAppBar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "10%",
      backgroundColor: "#1976d2",
    },
    goBackButton: { color: "white", fontSize: "180%" },
    loadingPage: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#87ceeb",
    },
    logoWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
