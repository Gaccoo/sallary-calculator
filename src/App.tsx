import React, { useEffect, useState } from 'react';
import moment from 'moment';
import phone from './assets/phone.png';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import data, { Employee, WorkHours } from './data/data';
import { getWeekRange, getWeekDays } from './DateGenerator';
import './App.scss';

const initialWeek = getWeekDays(getWeekRange(new Date()).from);

const App = () => {
  // INITIAL DATA
  const [employees, setEmployees] = useState<Employee[]>(data);

  // INPUT
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(data[0]);
  const [selectedWeek, setSelectedWeek] = useState<Date[]>(initialWeek);
  // CONTENT
  const [weeklyOverview, setWeeklyOverview] = useState<WorkHours[]>([{ day: '1/10/2022', hours: 1 }]);
  // FOOTER
  const [summary, setSummary] = useState();

  const datesToShow = selectedWeek.map((item) => item.toLocaleDateString());

  const workHoursToShow : WorkHours[] | undefined = selectedEmployee?.workHours.filter((item) => selectedWeek?.some((i) => i.toLocaleDateString() === item.day));

  const workHoursFormatted = datesToShow.map((item) => {
    const currentDayData = workHoursToShow?.find((curDay) => curDay.day === item);
    if (currentDayData) {
      return currentDayData;
    }
    return { day: item, hours: 0 };
  });

  const onEmployeeChange = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const onDateChange = (selectedDate: Date[]) => {
    setSelectedWeek(selectedDate);
  };

  useEffect(() => {
    setWeeklyOverview(workHoursFormatted);
  }, [selectedEmployee, selectedWeek]);

  return (
    <div className="App">

      <div className="phone-screen">
        <Header
          employees={employees}
          selectedEmployee={selectedEmployee}
          onEmployeeChange={onEmployeeChange}
          selectedWeek={selectedWeek}
          onDateChange={onDateChange}
        />
        <Content workHoursFormatted={workHoursFormatted} />
        <Footer />
        {/* <img className="phone" src={phone} alt="Phone" /> */}

      </div>
    </div>
  );
};

export default App;
