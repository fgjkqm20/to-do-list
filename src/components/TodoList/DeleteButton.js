import { useState } from 'react';
import { StyledIconButton, TodoItemDeleteIcon } from './TodoItemStyles.js';

/**
 * Delete Button Component
 * @return {JSX.Element} Delete Button Component
 */
function DeleteButton() {
  const [isMouseOut, setIsMouseOut] = useState(true);

  /**
   * MouseOver Event Handler
   * @return {void}
   */
  function handleMouseOver() {
    setIsMouseOut(false);
  }

  /**
   * MouseOut Event Handler
   * @return {void}
   */
  function handleMouseOut() {
    setIsMouseOut(true);
  }

  return (
    <StyledIconButton
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      aria-label='delete'
    >
      <TodoItemDeleteIcon color={isMouseOut ? '' : 'warning'} />
    </StyledIconButton>
  );
}

export default DeleteButton;
