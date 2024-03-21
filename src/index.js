import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

// DOM에서 'root' 엘리먼트를 찾아 React의 루트를 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// 루트에 앱을 렌더링
root.render(
  <React.StrictMode>
    {/* 기본 CSS를 재설정하는 MUI의 CssBaseline */}
    <CssBaseline />
    {/* 애플리케이션의 메인 컴포넌트 */}
    <App />
  </React.StrictMode>
);
