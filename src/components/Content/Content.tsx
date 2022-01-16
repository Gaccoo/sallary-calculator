import Row from '../Row/Row';
import { WorkHours } from '../../data/data';

type ContentProps = {
  workHoursFormatted: WorkHours[]
}

const Content = ({ workHoursFormatted }: ContentProps) => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (!workHoursFormatted) {
    return (
      <div className="content">
        IMAGE HERE
      </div>
    );
  }

  return (
    <div className="content">
      {workHoursFormatted.map((item, index) => (
        <Row
          hours={item.hours}
          key={item.day}
          date={item.day}
          title={weekdays[index]}
          dayNumber={index} // TODO REMOVE THIS
        />
      ))}
    </div>
  );
};

export default Content;
