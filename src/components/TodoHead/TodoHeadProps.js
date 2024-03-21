import { grey } from '@mui/material/colors';

/**
 * 날짜 Typography 프로퍼티 객체
 * @typedef {Object}
 * @property {string} component - 실제로 렌더링될 HTML 요소 또는 컴포넌트
 * @property {string} variant - 스타일 변형
 * @property {string} color - 텍스트 색상
 */
const dateProps = {
  component: 'h1',
  variant: 'h4',
  color: grey[900],
};

/**
 * 요일 Typography 프로퍼티 객체
 * @typedef {Object}
 * @property {string} component - 실제로 렌더링될 HTML 요소 또는 컴포넌트
 * @property {string} variant - 스타일 변형
 * @property {string} color - 텍스트 색상
 */
const weekProps = {
  component: 'h2',
  variant: 'h5',
  color: grey[600],
};

export { dateProps, weekProps };
