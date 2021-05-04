import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVeryDissatisfiedRoundedIcon from "@material-ui/icons/SentimentVeryDissatisfiedRounded";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../constants/styles";

interface Props {
  info: string;
}

export default function Notice({ info }: Props) {
  const classes = useStyles();
  const notices = [
    {
      info: "Many Matches",
      message: "Too many matches",
      icon: (
        <SentimentVeryDissatisfiedRoundedIcon className={classes.noticeIcon} />
      ),
    },
    {
      info: "Empty Search",
      message: "Type something to beign",
      icon: <SearchRoundedIcon className={classes.noticeIcon} />,
    },
    {
      info: "No Results",
      message: "No matches",
      icon: <SentimentVeryDissatisfiedIcon className={classes.noticeIcon} />,
    },
  ];

  const notice = notices.filter((notice) => notice.info === info);

  return (
    <Card className={classes.noticeCard}>
      <CardMedia>{notice[0].icon}</CardMedia>
      <CardContent>
        <Typography gutterBottom variant="body2" component="h2">
          {notice[0].message}
        </Typography>
      </CardContent>
    </Card>
  );
}
