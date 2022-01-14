import Dropdown from '../DropDown/Dropdown';
import Input from '../Input/Input';
import WorkerSelect from '../WorkerSelect/WorkerSelect';
import EmployeeInput from '../Input/EmployeeInput/EmployeeInput';
import DateInput from '../Input/DateInput/DateInput';

const Header = () => (
  <div className="header">
    <EmployeeInput />
    <DateInput />
  </div>
);

export default Header;
