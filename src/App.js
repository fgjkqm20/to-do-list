import Container from '@mui/material/Container';
import TodoDateHeader from './components/TodoDateHeader/TodoDateHeader.js';
import TodoListWrapper from './components/TodoList/TodoListWrapper.js';
import TodoForm from './components/TodoForm/TodoForm.js';

/**
 * Application Main Component
 * @return {JSX.Element} Application Component
 */
function App() {
  return (
    <>
      <Container maxWidth='sm'>
        <TodoDateHeader />
        <TodoListWrapper />
        <TodoForm />
      </Container>
    </>
  );
}

export default App;
