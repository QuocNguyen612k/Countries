import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SentimentVeryDissatisfiedRoundedIcon from "@material-ui/icons/SentimentVeryDissatisfiedRounded";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
interface Props {
  info: string;
}
const styles = {
  icon: {
    fontSize: 100,
  },
  card: {
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    flexDirection: "column" as "column",
    marginTop: "25%",
  },
};
export default function Notice({ info }: Props) {
  const notices = [
    {
      info: "Many Matches",
      message: "Too many matches",
      icon: <SentimentVeryDissatisfiedRoundedIcon style={styles.icon} />,
    },
    {
      info: "Empty Search",
      message: "Type something to beign",
      icon: <SearchRoundedIcon style={styles.icon} />,
    },
    {
      info: "No Results",
      message: "No matches",
      icon: <SentimentVeryDissatisfiedIcon style={styles.icon} />,
    },
  ];

  const notice = notices.filter((notice) => notice.info === info);

  return (
    <Card style={styles.card}>
      <CardMedia>{notice[0].icon}</CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {notice[0].message}
        </Typography>
      </CardContent>
    </Card>
  );
}
