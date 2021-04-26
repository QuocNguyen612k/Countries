import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#87ceeb",
    gap: "1%",
  },
  bold: {
    fontWeight: 600,
  },
  logo: {
    borderRadius: "50%",
    backgroundColor: "white",
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
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    backgroundColor: "#1976d2",
  },
  centerWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "1%",
    overflow: "auto",
    marginBottom: "2%",
  },
  resultsList: { flex: 1, alignSelf: "stretch" },
  resultsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    overflow: "auto",
    flex: "1",
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
});
