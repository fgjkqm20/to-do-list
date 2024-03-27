import { todoItems } from '../../constants/todoItems.js';
import TodoItem from './TodoItem.js';

/**
 * To do List Component
 * @returns {JSX.Element} TodoItem 배열
 */
function TodoList() {
  const todoList = todoItems.map((todoItem) => (
    <TodoItem key={todoItem.id} todo={todoItem.todo} />
  ));

  return <>{todoList}</>;
}

export default TodoList;
