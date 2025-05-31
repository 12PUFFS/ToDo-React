import Todo from './Todo';
import styles from './TodoList.module.css';
{
}

function TodoList({ todos }) {
  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        {todos.length === 0 && <h2>List is empty</h2>}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
