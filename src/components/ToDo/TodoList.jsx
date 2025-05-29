import Todo from './Todo';
import styles from './TodoList.module.css';
{
}

function TodoList({ todos }) {
  return (
    <div className={styles.todo}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
