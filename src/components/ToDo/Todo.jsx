import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.list} onDoubleClick={() => deleteTodo(index)}>
      <h1>{todo}</h1>
    </div>
  );
}

export default Todo;
