import React, { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import { Employee } from '../../../data/data';
import style from '../input.module.scss';

type EIProps = {
  employees: Employee[]
  selectedEmployee: Employee
  onEmployeeChange: (employee: Employee) => void
}

const EmployeeInput = ({ employees, onEmployeeChange, selectedEmployee }:EIProps) => {
  const [open, setOpen] = useState(false);
  const employeeWindowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isClickedOutside = (e: any) => {
      if (open && employeeWindowRef.current && !employeeWindowRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', isClickedOutside);

    return () => {
      document.removeEventListener('mousedown', isClickedOutside);
    };
  }, [open]);

  return (
    <div className={style.wrapper} onClick={() => setOpen(!open)} ref={employeeWindowRef}>

      <div className={open ? `${style.window} ${style.open}` : style.window}>
        <div className={style.title}>Employee</div>
        <div className={style.wrapper}>
          <div className={style.select}>
            <FaRegUser />
            <div className={style.user}>{selectedEmployee.name || 'Select Employee'}</div>
            <MdOutlineArrowDropUp />
          </div>

        </div>
      </div>

      {open ? (
        <div className={style.dropdown}>
          {employees.map((item) => (
            <div
              key={item.id}
              className={style.employeeItem}
              onClick={() => {
                setOpen(false);
                onEmployeeChange(item);
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
