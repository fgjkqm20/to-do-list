/**
 * Paper 컴포넌트의 프로퍼티 객체
 * @type {Object}
 * @property {number} elevation - 그림자 깊이
 * @property {string} variant - 스타일 변형
 */
const PaperProps = {
  elevation: 3,
  variant: 'elevation',
};

/**
 * Box 컴포넌트의 프로퍼티 객체
 * @type {Object}
 * @property {number} p - 패딩
 * @property {string} display - 요소 표시 방법 지정 문자열
 * @property {string} alignItems - 아이템 수직 정렬
 * @property {string} justifyContent - 아이템 수평 정렬
 */
const BoxProps = {
  p: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * TextField 컴포넌트의 프로퍼티
 * @type {Object}
 * @property {string} label - 레이블
 * @property {string} id - 고유 식별자
 * @property {string} variant - 스타일 변형
 * @property {Object} sx - 스타일 객체
 * @property {string} sx.width - 너비
 */
const TextFieldProps = {
  label: '할 일',
  id: 'standard-basic',
  variant: 'standard',
  sx: { width: '70%' },
};

/**
 * Button 컴포넌트의 프로퍼티
 * @type {Object}
 * @property {string} size - 크기
 * @property {string} variant - 스타일 변형
 */
const ButtonProps = {
  size: 'small',
  variant: 'outlined',
};

export { PaperProps, BoxProps, TextFieldProps, ButtonProps };
