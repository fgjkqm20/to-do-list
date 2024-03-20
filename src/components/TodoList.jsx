import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';

import TodoItem from './TodoItem';

function TodoList() {
  return (
    <Paper
      elevation={3}
      variant='elevation'
      sx={{ height: 300, color: grey[900] }}
    >
      <TodoItem />
    </Paper>
  );
}

export default TodoList;
