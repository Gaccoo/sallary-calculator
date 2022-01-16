import EmployeeInput from '../Input/EmployeeInput/EmployeeInput';
import DateInput from '../Input/DateInput/DateInput';
import { Employee } from '../../data/data';

type HeaderProps = {
  employees: Employee[]
  selectedEmployee: Employee
  selectedWeek: Date[] | null
  onEmployeeChange: (employee: Employee) => void
  onDateChange: (date: Date[]) => void
}

const Header = ({
  employees, selectedWeek, onDateChange, onEmployeeChange, selectedEmployee,
}:HeaderProps) => (
  <div className="header">
    <EmployeeInput employees={employees} selectedEmployee={selectedEmployee} onEmployeeChange={onEmployeeChange} />
    <DateInput selectedWeek={selectedWeek} onDateChange={onDateChange} />
  </div>
);

export default Header;
