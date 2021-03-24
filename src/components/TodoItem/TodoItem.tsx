import React from "react";
import "./TodoItem.css";

interface ITodoItems {
  id: number;
  todo: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItems> = (props) => {
  const { id, todo, onDelete, onEdit } = props;
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <div className="button-container">
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};
