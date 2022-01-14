import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import data from '../../../data/data';
import style from '../input.module.scss';

const EmployeeInput = () => {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>

      <div className={open ? `${style.window} ${style.open}` : style.window}>
        <div className={style.title}>Employee</div>
        <div className={style.wrapper}>
          <div className={style.select} onClick={() => setOpen(!open)}>
            <FaRegUser />
            <div className={style.user}>{selected || 'Select Employee'}</div>
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

export default EmployeeInput;
