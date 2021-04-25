import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  bold: {
    fontWeight: 600,
  },
  logo: {
    width: "20%",
  },
  flagImg: {
    maxWidth: "40%",
    border: "1px solid",
  },
  search: { flex: 1, marginLeft: "1%" },
  searchField: {
    display: "flex",
    maxHeight: "90%",
  },
  searchBarWrapper: {
    padding: "0 2% 1% 2%",
  },
  resultsList: { flex: 1, alignSelf: "stretch" },
  resultsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFAFA",
    overflow: "auto",
    flex: "1",
    margin: "1% 2% 2% 2%",
    padding: "1px",
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
  centerCell: { textAlign: "center" },
  centerImgWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  leftCell: {
    textAlign: "left",
  },
  centerBold: { paddingLeft: "30%", fontWeight: 600 },
  center: {
    paddingLeft: "40%",
  },
  detailWrapper: {
    boxShadow: "none",
    padding: "1px",
    flex: 1,
    margin: "1% 2% 3% 2%",
    backgroundColor: "white",
  },
  detailAppBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
  },
  goBackButton: { color: "white", fontSize: "180%" },
});
