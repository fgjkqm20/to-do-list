import Container from '@mui/material/Container';
import TodoHead from './components/todo-head/TodoHead.js';
import TodoListWrapper from './components/todo-list/TodoListWrapper.js';
import TodoForm from './components/todo-form/TodoForm.js';

/**
 * Application Main Component
 * @returns {JSX.Element} Application Component
 */
function App() {
  return (
    <>
      <Container maxWidth='sm'>
        <TodoHead />
        <TodoListWrapper />
        <TodoForm />
      </Container>
    </>
  );
}

export default App;
