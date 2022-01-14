import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from '../input.module.scss';
import data from '../../../data/data';

const DateInput = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <div className={style.wrapper}>

      <div className={open ? `${style.window} ${style.open}` : style.window}>
        <div className={style.title}>Date</div>
        <div className={style.wrapper}>
          <div className={style.select} onClick={() => setOpen(!open)}>
            <AiOutlineCalendar />
            <div className={style.user}>{selected || 'Select Date'}</div>
            <MdOutlineArrowDropUp />
          </div>

        </div>
      </div>
      {open ? (
        <div className={style.dropdown}>
          {data.map((item) => (
            <div
              key={item.id}
              className={style.employeeItem}
              onClick={() => {
                setOpen(false);
                setSelected(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>

  );
};

export default DateInput;
