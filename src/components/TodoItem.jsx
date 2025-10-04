import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const TodoItem = ({ todo, label, remove, toggle }) => {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <HighlightOffIcon onClick={remove} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": label }}
            onClick={toggle}
          />
        </ListItemIcon>
        <ListItemText
          id={label}
          primary={todo.todo}
          sx={{ textDecoration: todo.completed ? "line-through" : "" }}
        />
      </ListItemButton>
    </ListItem>
  );
};
