import moment from 'moment';
import { names, WorkHours } from './data/data';

export const getLastFiveWeeks = () => [...new Array(31)]
  .map((i, idx) => moment()
    .startOf('day')
    .subtract(idx, 'days')
    .toDate()
    .toLocaleDateString());

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

export const generateInitialData = () => {
  const emptyFiveWeeks = getLastFiveWeeks();
  const randomEmployeeCount = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  const emptyEmployeeArray = new Array(randomEmployeeCount).fill({});

  const generateFiveWeekWorkHours = ():WorkHours[] => emptyFiveWeeks
    .map((item) => ({ day: item, hours: Math.floor(Math.random() * (12 - 3 + 1)) + 3 }));

  return emptyEmployeeArray.map((item, index) => ({
    id: index,
    name: names[Math.floor(Math.random() * names.length - 1)],
    workHours: generateFiveWeekWorkHours(),
  }));
};
