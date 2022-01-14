import Row from '../Row/Row';

const Content = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className="content">
      {weekdays.map((item) => (<Row key={item} title={item} />))}
    </div>
  );
};

export default Content;
