import Container from '@mui/material/Container';
import TodoHead from './components/TodoHead/TodoHead.js';
import TodoListWrapper from './components/TodoList/TodoListWrapper.js';
import TodoForm from './components/TodoForm/TodoForm.js';

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
