export default function isWeekend(date) {
  const weekendDay = date.format('dddd');
  if (weekendDay === 'Saturday' || weekendDay === 'Sunday') {
    return weekendDay;
  }else {
    return "Not a weekend";
  }
};