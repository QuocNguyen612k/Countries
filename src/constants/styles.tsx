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
  search: { flex: 1, marginLeft: "1%" },
  resultsList: { flex: 1, alignSelf: "stretch" },
  resultsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    overflow: "auto",
    flex: "1",
  },
  noticeIcon: {
    fontSize: 100,
  },
  noticeCard: {
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    flexDirection: "column" as "column",
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
});
