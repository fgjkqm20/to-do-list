import Typography from '@mui/material/Typography';

import { titleProps, subTitleProps } from '../constants/props.js';
import getCurrentDate from '../utils/getCurrentDate.js';

function TodoHead() {
  const { nowYear, nowMonth, nowDate, nowDay } = getCurrentDate();

  return (
    <>
      <Typography {...titleProps}>
        {nowYear}년 {nowMonth}월 {nowDate}일
      </Typography>
      <Typography {...subTitleProps}>{nowDay}요일</Typography>
      <hr />
    </>
  );
}

export default TodoHead;
