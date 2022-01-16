import React, { useEffect, useState } from 'react';

import style from '../input.module.scss';

type HoursProps = {
  dayName: String
  input: string
  onInputChange: (value: string) => void
}

const DateInput = ({ dayName, input, onInputChange }: HoursProps) => (

  <input
    className={style.numberInput}
    type="text"
    value={input}
    placeholder="0"
    onFocus={(e) => {
      e.target.placeholder = '';
    }}
    onBlur={(e) => {
      e.target.placeholder = '0';
    }}
    onChange={(e) => onInputChange(e.target.value)}
  />

);

export default DateInput;
