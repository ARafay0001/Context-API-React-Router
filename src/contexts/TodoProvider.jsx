import { TodoContext } from "./TodoContext";
import { useState } from "react";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);// created the use state to update the state of the dadta 

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // 4️⃣ Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
        {children}
        </TodoContext.Provider>
}


export default TodoProvider;
