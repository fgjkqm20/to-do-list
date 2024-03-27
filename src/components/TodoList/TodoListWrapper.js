import { StyledCard } from './TodoItemStyles.js';
import TodoList from './TodoList.js';

/**
 * Todo List Wrapper Component
 * @returns {JSX.Element} Styled Card Component
 */
function TodoListWrapper() {
  return (
    <StyledCard variant='outlined' elevation={3}>
      <TodoList />
    </StyledCard>
  );
}

export default TodoListWrapper;
