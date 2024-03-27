import { useState } from 'react';
import { StyledIconButton, TodoItemDeleteIcon } from './TodoItemStyles.js';

function DeleteButton() {
  const [isMouseOut, setIsMouseOut] = useState(true);

  function handleMouseOver() {
    setIsMouseOut(false);
  }
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
