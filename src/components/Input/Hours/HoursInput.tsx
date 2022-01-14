import React, { useState } from 'react';

import style from '../input.module.scss';

type HoursProps = {
  dayName: String
}

const DateInput = ({ dayName }: HoursProps) => {
  const [input, setInput] = useState(8);
  return (

    <input className={style.numberInput} type="number" value={input} />

  );
};

export default DateInput;
