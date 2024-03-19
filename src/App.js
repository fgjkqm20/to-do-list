import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  return (
    <>
      <Container maxWidth='sm'>
        <Box style={{ textAlign: 'left' }}>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </Box>
      </Container>
    </>
  );
}

export default App;
