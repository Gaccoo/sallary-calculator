import Row from '../Row/Row';
import { WorkHours, WorkHoursWithSalary } from '../../data/data';

type ContentProps = {
  workHoursFormatted: WorkHoursWithSalary[]
  onHoursChange: (value: WorkHours) => void
  loading: boolean
}

const Content = ({
  workHoursFormatted,
  onHoursChange,
  loading,
}: ContentProps) => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="content">
      {loading ? (<h1 className="loading">Loading...</h1>)
        : workHoursFormatted.map((item, index) => (
          <Row
            workHoursFormatted={workHoursFormatted[index]}
            onHoursChange={onHoursChange}
            hours={item.hours}
            key={item.day}
            date={item.day}
            title={weekdays[index]}
          />
        ))}

    </div>
  );
};

export default Content;
