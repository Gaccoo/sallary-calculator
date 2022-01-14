import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from '../input.module.scss';

const DateInput = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>

      <div className={style.window}>
        <div className={style.title}>Date</div>
        <div className={style.wrapper}>
          <div className={style.select} onClick={() => setOpen(!open)}>
            <AiOutlineCalendar />
            <div className={style.user}>Date</div>
            <MdOutlineArrowDropUp />
          </div>

        </div>
      </div>
      <div>DROPDOWN GOES HERE</div>
    </div>

  );
};

export default DateInput;
