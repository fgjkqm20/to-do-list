import TodoInput from './TodoInput.jsx';
import TodoAddButton from './TodoAddButton.js';
import { TodoFormWrapper } from './TodoFormWrapper.jsx';
import { FormControlWrapper } from './FormControlWrapper.js';

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
