import { useState } from 'react';
import styles from './TodoForm.module.css';
// import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.rt}>
      <form onSubmit={onSubmitHandler} className={styles.input}>
        <input
          type="text"
          placeholder="enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>;
      </form>
    </div>
  );
}

export default TodoForm;
