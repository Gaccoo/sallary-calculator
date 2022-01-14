import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from '../input.module.scss';

const EmployeeInput = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>

      <div className={style.window}>
        <div className={style.title}>Employee</div>
        <div className={style.wrapper}>
          <div className={style.select} onClick={() => setOpen(!open)}>
            <FaRegUser />
            <div className={style.user}>USER</div>
            <MdOutlineArrowDropUp />
          </div>

        </div>
      </div>
      <div>DROPDOWN GOES HERE</div>
    </div>

  );
};

export default EmployeeInput;
