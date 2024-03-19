import Paper from '@mui/material/Paper';

import TodoItem from './TodoItem';

function TodoList() {
  return (
    <Paper
      elevation={3}
      variant='elevation'
      sx={{ height: 300, color: '#212121' }}
    >
      <TodoItem />
    </Paper>
  );
}

export default TodoList;
