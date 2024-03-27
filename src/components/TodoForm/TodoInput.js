import { StyledTextField } from './StyledTextField';

/**
 * To do Input Component
 * @returns {JSX.Element} Styled Standard TextField Component
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
