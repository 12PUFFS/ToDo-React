import styles from './Todo.module.css';

function Todo({ todo }) {
  return (
    <div className={styles.list}>
      <h1>{todo}</h1>
    </div>
  );
}

export default Todo;
