import { Container } from '@mui/material';
import TodoHead from './components/TodoHead/TodoHead.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import TodoCreate from './components/TodoCreate/TodoCreate.jsx';

/**
 * 애플리케이션의 메인 컴포넌트
 * @returns {JSX.Element} 애플리케이션 컴포넌트
 */
function App() {
  return (
    <>
      {/* 최대 너비가 'small'인 컨테이너 */}
      <Container maxWidth='sm'>
        {/* 할 일 목록의 상단 부분 */}
        <TodoHead />
        {/* 할 일 목록 */}
        <TodoList />
        {/* 새로운 할 일 생성 양식 */}
        <TodoCreate />
      </Container>
    </>
  );
}

export default App;
