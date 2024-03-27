import TodoInput from './TodoInput.js';
import TodoAddButton from './TodoAddButton.js';
import { TodoFormWrapper } from './TodoFormWrapper.js';
import { FormControlWrapper } from './FormControlWrapper.js';

/**
 * To do Form Component
 * @returns {JSX.Element} TodoFormWrapper Component
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
