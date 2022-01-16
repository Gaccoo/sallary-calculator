import moment from 'moment';

export const getWeekDays = (weekStart: Date) => {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate(),
    );
  }
  return days;
};

export const getWeekRange = (date: Date) => ({
  from: moment(date)
    .startOf('isoWeek')
    .toDate(),
  to: moment(date)
    .endOf('isoWeek')
    .toDate(),
});
