import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { todoItems } from '../constants/todoItems.js';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const todoItemList = todoItems.map((todoItem) => (
  <Box key={todoItem.id} sx={{ display: 'flex' }}>
    <Checkbox {...label} />
    <p>{todoItem.todo}</p>
    <Box
      sx={{
        marginLeft: 'auto',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IconButton aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Box>
));

function TodoItem() {
  return <>{todoItemList}</>;
}

export default TodoItem;
