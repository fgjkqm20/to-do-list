import { Paper } from '@mui/material';
import TodoItem from '../TodoItem/TodoItem.jsx';
import { PaperProps } from './TodoListProps.js';

/**
 * 할 일 목록을 표시하는 컴포넌트
 * @returns {JSX.Element} 할 일 목록 컴포넌트
 */
function TodoList() {
  return (
    <Paper {...PaperProps}>
      <TodoItem />
    </Paper>
  );
}

export default TodoList;
