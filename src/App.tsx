import React, { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { Title } from "./components/Title/Title";

interface ITodo {
  id: number;
  todo: string;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodoList((prevTodoList) => {
        return [
          ...prevTodoList,
          {
            id: Date.now(),
            todo: input,
          },
        ];
      });
      setInput("");
    } else alert("todo is empty");
  };

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  const onDelete = (id: number) => {
    const newTodo = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(newTodo);
  };

  const onEdit = (id: number) => {
    const todo = [...todoList].find((todo) => todo.id === id);
    if (todo) {
      setInput(todo.todo);
      onDelete(id);
    }
  };

  return (
    <div className="container">
      <Title>My ToDo List</Title>
      <div className="todo-input">
        <input
          type="text"
          name="todoInput"
          onChange={handleInput}
          value={input}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <Title>List of items</Title>
      {todoList.map((ele) => (
        <TodoItem
          todo={ele.todo}
          id={ele.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default App;
