import { useState } from 'react';
import styles from './TodoForm.module.css';
// import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Проверка на пустой ввод
    if (!text.trim()) {
      setIsError(true);
      return;
    }

    // Если ввод не пустой
    addTodo(text);
    setText('');
    setIsError(false);
  };

  return (
    <div className={styles.rt}>
      <form onSubmit={onSubmitHandler} className={styles.input}>
        <input
          type="text"
          placeholder={isError ? 'Task cannot be empty!' : 'Enter your task'}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setIsError(false); // Сбрасываем ошибку при изменении ввода
          }}
          className={isError ? styles.errorInput : ''}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
