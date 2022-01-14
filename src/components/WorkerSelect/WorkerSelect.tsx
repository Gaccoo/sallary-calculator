import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from './workerSelect.module.scss';

import WorkerDropdown from './WorkerDropdown/WorkerDropdown';

const WorkerSelect = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>
      <div className={style.select} onClick={() => setOpen(!open)}>
        <FaRegUser />
        <div className={style.user}>USER</div>
        <MdOutlineArrowDropUp />
      </div>
      {open ? <WorkerDropdown /> : null}
    </div>
  );
};

export default WorkerSelect;
