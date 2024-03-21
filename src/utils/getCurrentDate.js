import { WEEK_DAYS } from '../constants/constants.js';

// @ts-check

/**
 * 현재 날짜와 요일을 반환하는 함수
 * @returns {object}
 * @property {number} nowYear 현재 연도
 * @property {string} nowMonth 현재 월 (0부터 시작)
 * @property {string} nowDate 현재 일
 * @property {string} nowDay 현재 요일
 */
function getCurrentDate() {
  const now = new Date();
  const nowDay = WEEK_DAYS[now.getDay()];
  const [nowYear, nowMonth, nowDate] = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ];

  return { nowYear, nowMonth, nowDate, nowDay };
}

export default getCurrentDate;
