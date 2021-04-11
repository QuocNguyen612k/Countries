import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import Box from "@material-ui/core/Box";

const Results = () => {
  return (
    <Box
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        height: "70%",
      }}
    >
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Results;
