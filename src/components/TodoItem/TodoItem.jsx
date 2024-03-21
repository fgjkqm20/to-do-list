import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { todoItems } from '../../constants/todoItems.js';
import {
  TypographyStyles,
  IconButtonContainerStyles,
  IconButtonProps,
  DeleteIconStyle,
} from './TodoItemProps.js';

/**
 * 할 일 항목 리스트를 생성하는 컴포넌트
 * @returns {JSX.Element} 할 일 항목 컴포넌트
 */
function TodoItem() {
  // 각 할 일 항목에 대한 JSX 배열 생성
  const todoItemList = todoItems.map((todoItem) => (
    <Box key={todoItem.id} sx={{ display: 'flex' }}>
      <Typography sx={TypographyStyles}>{todoItem.todo}</Typography>
      <Box sx={IconButtonContainerStyles}>
        <IconButton {...IconButtonProps}>
          <DeleteIcon {...DeleteIconStyle} />
        </IconButton>
      </Box>
    </Box>
  ));

  return <>{todoItemList}</>;
}

export default TodoItem;
