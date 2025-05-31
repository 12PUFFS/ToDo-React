import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        {!todos.length && <h2>List is empty</h2>}
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
