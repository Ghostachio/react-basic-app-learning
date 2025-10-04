import List from "@mui/material/List";
import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, remove, toggle }) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        textAlign: "center",
        p: 3,
        overflowY: todos.length > 6 ? "scroll" : "",
      }}
    >
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <TodoItem
            todo={todo}
            label={labelId}
            remove={() => remove(todo.id)}
            key={todo.id}
            toggle={() => toggle(todo.id)}
          />
        );
      })}
    </List>
  );
}
