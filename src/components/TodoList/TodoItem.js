import {
  TodoItemWrapper,
  TodoItemText,
  DeleteButtonWrapper,
} from './TodoItemStyles.js';
import DeleteButton from './DeleteButton.js';

/**
 * To do Item Component
 * @param {object} props - 할 일 id 및 항목이 포함된 객체
 * @param {string} props.todo - 할 일 항목
 * @returns {JSX.Element} TodoItemWrapper Component
 */
function TodoItem({ todo }) {
  return (
    <TodoItemWrapper>
      <TodoItemText>{todo}</TodoItemText>
      <DeleteButtonWrapper>
        <DeleteButton />
      </DeleteButtonWrapper>
    </TodoItemWrapper>
  );
}

export default TodoItem;
