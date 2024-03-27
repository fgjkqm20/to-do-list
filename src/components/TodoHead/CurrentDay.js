import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import getCurrentDay from '../../utils/getCurrentDay.js';

/**
 * 현재 요일 Component
 * @returns {JSX.Element} Typography Component
 */
function CurrentDay() {
  const nowDay = getCurrentDay();

  return (
    <Typography component='h2' variant='h5' color={grey[600]}>
      {nowDay}요일
    </Typography>
  );
}

export default CurrentDay;
