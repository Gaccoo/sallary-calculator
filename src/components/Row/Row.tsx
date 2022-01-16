import { useEffect, useRef, useState } from 'react';
import style from './row.module.scss';
import HoursInput from '../Input/Hours/HoursInput';
import { Employee } from '../../data/data';

type RowProps = {
  title: String
  dayNumber: number
  hours: number | undefined
  date: string
}

const Row = ({
  title, dayNumber, hours, date,
}: RowProps) => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    if (hours) {
      setInput(hours.toString());
    }
  }, []);

  const onInputChange = (value: string) => {
    setInput(value);
  };
  return (
    <div className={style.row}>
      <HoursInput dayName={title} input={input} onInputChange={onInputChange} />
      <div className={style.sum}>
        {/* //TODO EXTRACT THESE MAGIC NUMBERS */}
        {`€ ${+input * (dayNumber > 4 ? 20 : 10)}`}
      </div>
    </div>
  );
};

export default Row;
