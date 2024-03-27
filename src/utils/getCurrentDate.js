/**
 * 현재 날짜 반환 함수
 * @returns {object}
 * @property {number} nowYear 현재 연도
 * @property {string} nowMonth 현재 월
 * @property {string} nowDate 현재 일
 */
function getCurrentDate() {
  const now = new Date();
  const [nowYear, nowMonth, nowDate] = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ];

  return { nowYear, nowMonth, nowDate };
}

export default getCurrentDate;
