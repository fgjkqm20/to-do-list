function getCurrentDate() {
  const now = new Date();
  const [nowYear, nowMonth, nowDate] = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ];
  const nowDay = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];

  return { nowYear, nowMonth, nowDate, nowDay };
}

export default getCurrentDate;
