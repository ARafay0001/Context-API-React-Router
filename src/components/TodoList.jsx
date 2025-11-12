import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  // 1. Get todos array from context
  const { todos } = useContext(TodoContext);

  return (
    <div className="mx-auto w-max mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
      <ul>
        {/* 2. Map over todos and render TodoItem for each */}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
