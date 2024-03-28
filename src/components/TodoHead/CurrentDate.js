import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import getCurrentDate from '../../utils/getCurrentDate.js';

/**
 * 현재 날짜 Component
 * @return {JSX.Element} Typography Component
 */
function CurrentDate() {
  const { nowYear, nowMonth, nowDate } = getCurrentDate();

  return (
    <Typography component='h1' variant='h4' color={grey[900]}>
      {nowYear}년 {nowMonth}월 {nowDate}일
    </Typography>
  );
}

export default CurrentDate;
