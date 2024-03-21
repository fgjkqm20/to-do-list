import { grey } from '@mui/material/colors';

/**
 * Paper 컴포넌트의 프로퍼티.
 * @type {Object}
 * @property {string} variant - 스타일 변형
 * @property {number} elevation - 그림자 깊이
 * @property {Object} sx - 스타일 객체
 * @property {string} sx.color - 내부 텍스트 색상
 */
const PaperProps = {
  variant: 'elevation',
  elevation: 3,
  sx: {
    color: grey[900],
  },
};

export { PaperProps };
