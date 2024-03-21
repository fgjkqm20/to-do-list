import getCurrentDate from '../../utils/getCurrentDate.js';
import { Typography } from '@mui/material';
import { dateProps, weekProps } from './TodoHeadProps.js';

/**
 * 할 일 목록의 날짜와 요일을 표시하는 컴포넌트
 * @returns {JSX.Element} 현재 날짜와 요일이 담긴 컴포넌트
 */
function TodoHead() {
  // 현재 날짜, 요일 정보를 가져옴
  const { nowYear, nowMonth, nowDate, nowDay } = getCurrentDate();

  return (
    <>
      {/* 현재 날짜 출력 */}
      <Typography {...dateProps}>
        {nowYear}년 {nowMonth}월 {nowDate}일
      </Typography>
      {/* 현재 요일 출력 */}
      <Typography {...weekProps}>{nowDay}요일</Typography>
      <hr />
    </>
  );
}

export default TodoHead;
