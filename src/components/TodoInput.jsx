import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoInput = () => {
  // 1. Local state to store the current input value
  const [task, setTask] = useState("");

  // 2. Access addTodo function from context
  const { addTodo } = useContext(TodoContext);

  // 3. Handle the Add button click
  const handleAdd = () => {
    if (task.trim() === "") return; // prevent adding empty todos
    addTodo(task); // call the function from context to add todo
    setTask("");   // clear the input
  };

  return (
    <div className="mx-auto w-max flex mt-6">
      {/* Controlled input */}
      <input
        value={task} // bind state to input
        onChange={(e) => setTask(e.target.value)} // update state when typing
        className="text-2xl bg-green-100 p-3 h-14 rounded-l-2xl"
        type="text"
        placeholder="Enter the task todo"
      />
      {/* Add button */}
      <button
        onClick={handleAdd}
        className="bg-green-400 h-14 p-3 text-white rounded-r-2xl hover:bg-green-600 active:bg-green-700 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
