/**
 * Typography 컴포넌트 스타일
 * @type {Object}
 * @property {string} display - 요소의 내부 및 외부 표시 유형 설정
 * @property {string} alignItems - 아이템 내부 상하 정렬 상태 설정
 * @property {number} flexGrow - 플렉스 아이템이 차지할 수 있는 공간의 비율
 * @property {number} marginLeft - 왼쪽 여백
 */
const TypographyStyles = {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  marginLeft: 3,
};

/**
 * IconButtonContainer 컴포넌트 스타일
 * @type {Object}
 * @property {string} display - 요소 표시 방법 지정 문자열
 * @property {string} flexDirection - 플렉스 방향
 * @property {string} justifyContent - 컨텐츠 정렬 방법
 * @property {string} width - 너비
 * @property {string} height - 높이
 * @property {number} m - 요소
 * @property {string} marginLeft - 왼쪽 요소
 * @property {string} marginRight - 오른쪽 요소
 */
const IconButtonContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: TypographyStyles.fontSize,
  height: TypographyStyles.fontSize,
  m: 1,
  marginLeft: 'auto',
  marginRight: '10px',
};

/**
 * IconButton 컴포넌트의 프로퍼티 객체
 * @type {Object}
 * @property {string} 'aria-label' - 접근성 레이블
 * @property {number} width - 너비
 * @property {number} height - 높이
 * @property {number} p - 패딩
 */
const IconButtonProps = {
  'aria-label': 'delete',
  width: TypographyStyles.fontSize,
  height: TypographyStyles.fontSize,
  p: 0,
};

/**
 * 삭제 아이콘 스타일
 * @type {Object}
 * @property {number} fontSize - 아이콘 크기
 */
const DeleteIconStyle = {
  fontSize: TypographyStyles.fontSize,
};

export {
  TypographyStyles,
  IconButtonContainerStyles,
  IconButtonProps,
  DeleteIconStyle,
};
