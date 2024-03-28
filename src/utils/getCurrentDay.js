import { WEEK_DAYS } from '../constants/weekDays.js';

/**
 * 현재 요일 반환 함수
 * @return {string} 현재 요일
 */
function getCurrentDay() {
  const now = new Date();
  const nowDay = WEEK_DAYS[now.getDay()];

  return nowDay;
}

export default getCurrentDay;
