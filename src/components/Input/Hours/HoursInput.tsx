import React, { useState } from 'react';

import style from '../input.module.scss';

type HoursProps = {
  dayName: String
}

const DateInput = ({ dayName }: HoursProps) => {
  const [input, setInput] = useState(false);
  return (
    <div className={style.wrapper}>

      <div className={style.windowN}>
        <div className={style.title}>{dayName}</div>
        <input className={style.numberInput} type="number" value={8} />
      </div>
    </div>

  );
};

export default DateInput;
