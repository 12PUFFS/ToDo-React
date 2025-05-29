import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList() {
  return (
    <div className={styles.todo}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default TodoList;
