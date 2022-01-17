import Row from '../Row/Row';
import { WorkHours, WorkHoursWithSalary } from '../../data/data';

type ContentProps = {
  workHoursFormatted: WorkHoursWithSalary[]
  onHoursChange: (value: WorkHours) => void
  employeeHoursData: WorkHours[]
  loading: boolean
}

const Content = ({
  workHoursFormatted,
  onHoursChange,
  employeeHoursData,
  loading,
}: ContentProps) => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="content">
      {loading ? (<h1 className="loading">Loading...</h1>)
        : workHoursFormatted.map((item, index) => {
          const hasData = employeeHoursData.find((day) => day.day === item.day);
          return (
            <Row
              workHoursFormatted={workHoursFormatted[index]}
              onHoursChange={onHoursChange}
              hours={hasData ? hasData.hours : item.hours}
              key={item.day}
              date={item.day}
              title={weekdays[index]}
            />
          );
        })}

    </div>
  );
};

export default Content;
