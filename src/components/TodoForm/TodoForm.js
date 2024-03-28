import TodoInput from './TodoInput.js';
import TodoAddButton from './TodoAddButton.js';
import { TodoFormWrapper, FormControlWrapper } from './TodoFormStyles.js';

/**
 * To do Form Component
 * @return {JSX.Element} TodoFormWrapper Component
 */
function TodoForm() {
  return (
    <TodoFormWrapper variant='outlined'>
      <FormControlWrapper>
        <TodoInput />
        <TodoAddButton />
      </FormControlWrapper>
    </TodoFormWrapper>
  );
}

export default TodoForm;
