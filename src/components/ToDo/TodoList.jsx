import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        {!todos.length && <h2>List is empty</h2>}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo.text} // Передаем только текст задачи
            index={todo.id} // Используем id как индекс
            deleteTodo={() => deleteTodo(todo.id)} // Передаем функцию с id
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
