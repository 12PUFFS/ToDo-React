import styles from './TodoForm.module.css';
function TodoForm() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="enter your task" />
    </div>
  );
}

export default TodoForm;
