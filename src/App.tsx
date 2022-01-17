import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { getWeekRange, getWeekDays, generateInitialData } from './Generator';
import {
  Employee, WorkHours, WorkHoursWithSalary,
} from './data/data';
import './App.scss';

const initialWeek = getWeekDays(getWeekRange(new Date()).from);
const salaryBase = 10;
const salaryOvertime = salaryBase * 2;

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>(generateInitialData());
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(employees[0]);
  const [selectedWeek, setSelectedWeek] = useState<Date[]>(initialWeek);
  const [loading, setLoading] = useState(true);

  const datesToShow = selectedWeek.map((item) => item.toLocaleDateString());
  const workDaysToShow: WorkHours[] = selectedEmployee.workHours
    .filter((item) => selectedWeek.some((i) => i.toLocaleDateString() === item.day));

  const workHoursFormatted = (): WorkHoursWithSalary[] => datesToShow.map((item, index) => {
    const currentDayData = workDaysToShow.find((currentDay) => currentDay.day === item);
    if (currentDayData && index < 5) {
      return {
        ...currentDayData,
        salary: salaryBase * currentDayData.hours,
      };
    }
    if (currentDayData && index >= 5) {
      return {
        ...currentDayData,
        salary: salaryOvertime * currentDayData.hours,
      };
    }
    return {
      day: item,
      hours: 0,
      salary: 0,
    };
  });

  const employeeHoursData = selectedEmployee.workHours
    .filter((item) => datesToShow.some((date) => date === item.day));

  const totalHours = workHoursFormatted()
    .map((item) => item.hours)
    .reduce((a, b) => a + b);

  const onEmployeeChange = (employee: Employee) => {
    const newEmployee = { ...employee };
    setSelectedEmployee(newEmployee);
  };

  const onDateChange = (selectedDate: Date[]) => {
    setSelectedWeek([...selectedDate]);
  };

  const onHoursChange = (value: WorkHours) => {
    const employeeCopy = { ...selectedEmployee };
    const dayHasValue = employeeCopy.workHours.find((item) => item.day === value.day);

    if (!dayHasValue) {
      employeeCopy.workHours.push(value);
    } else {
      const editedDay = employeeCopy.workHours.find((item) => item.day === value.day);
      if (editedDay) {
        editedDay.hours = value.hours;
      }
    }

    const newState = employees.map((item) => {
      if (item.id === employeeCopy.id) {
        return employeeCopy;
      }
      return item;
    });

    setEmployees(newState);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <Content
          loading={loading}
          workHoursFormatted={workHoursFormatted()}
          onHoursChange={onHoursChange}
          employeeHoursData={employeeHoursData}
        />
        <Footer
          loading={loading}
          totalHours={totalHours}
          totalSalary={workHoursFormatted()
            .map((i) => i.salary)
            .reduce((a, b) => a + b)}
        />

      </div>
    </div>
  );
};

export default App;
