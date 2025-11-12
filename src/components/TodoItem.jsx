import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ todo }) => {
  // 1. Access deleteTodo and toggleTodo functions from context
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li className="flex items-center justify-between bg-green-100 p-3 rounded-xl my-2">
      {/* 2. Todo text with strikethrough if completed */}
      <span
        onClick={() => toggleTodo(todo.id)} // toggle completed when clicked
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
      >
        {todo.text}
      </span>

      {/* 3. Delete button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 active:bg-red-700 transition-all"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
