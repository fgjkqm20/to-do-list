import { StyledTextField } from './TodoFormStyles.js';

/**
 * To do Input Component
 * @return {JSX.Element} Styled Standard TextField Component
 */
function TodoInput() {
  return (
    <StyledTextField
      label='할 일'
      required='standard-basic'
      variant='standard'
    />
  );
}

export default TodoInput;
