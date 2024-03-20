import Typography from '@mui/material/Typography';

import {
  titleTypographyProps,
  subTitleTypographyProps,
} from '../constants/props.js';
import getCurrentDate from '../utils/getCurrentDate.js';

function TodoHead() {
  const { nowYear, nowMonth, nowDate, nowDay } = getCurrentDate();

  return (
    <>
      <Typography {...titleTypographyProps}>
        {nowYear}년 {nowMonth}월 {nowDate}일
      </Typography>
      <Typography {...subTitleTypographyProps}>{nowDay}요일</Typography>
      <hr />
    </>
  );
}

export default TodoHead;
