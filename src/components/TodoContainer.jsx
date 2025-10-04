import Box from "@mui/material/Box";
import { TodoInputField } from "./TodoInputField";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";

export const TodoContainer = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const randomid = Math.floor(Math.random() * 100000);
    if (input.length < 1) {
      return;
    }
    setTodos((curr) => [...curr, { id: randomid, todo: input, completed: false }]);
    setInput("");
  };

  const handleChange = (e) => {
    const input = e.target.value;

    setInput(input);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const handleToggle = (id) => {
    setTodos((curr) =>
      curr.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <Box
      component="section"
      sx={{
        p: 2,

        width: 600,
        margin: " 0 auto",
        marginTop: 10,
        height: 600,
        padding: 1,
        borderRadius: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Today's Todo List</h1>
      <TodoInputField add={addTodo} handleInput={handleChange} value={input} />
      <TodoList todos={todos} remove={deleteTodo} toggle={handleToggle} />
    </Box>
  );
};
