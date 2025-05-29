import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="enter your task" />
      <button className={Button}>Submit</button>
    </div>
  );
}

export default TodoForm;
