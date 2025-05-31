import { useState, useEffect } from 'react'; // Добавлен useEffect
import './App.css';
import TodoForm from './components/ToDo/TodoForm';
import TodoList from './components/ToDo/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Could not parse todos from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
