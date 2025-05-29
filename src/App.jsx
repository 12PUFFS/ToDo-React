import './App.css';
// import Todo from './components/ToDo/Todo';
import TodoForm from './components/ToDo/TodoForm';
import TodoList from './components/ToDo/TodoList';

function App() {
  return (
    <>
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
