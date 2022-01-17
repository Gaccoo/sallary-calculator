import React, { useState } from 'react';
import '../../../assets/styles/daypicker.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from '../input.module.scss';
import DatePicker from '../DatePicker';

type DateInputProps = {
  selectedWeek: Date[] | null
  onDateChange: (date: Date[]) => void
}

const DateInput = ({
  selectedWeek,
  onDateChange,
}: DateInputProps) => {
  const [open, setOpen] = useState(false);

  const dateChangeHandler = (value: Date[]) => {
    setOpen(false);
    onDateChange(value);
  };

  return (
    <div className={style.wrapper} onClick={() => setOpen(!open)}>

      <div className={open ? `${style.window} ${style.open}` : style.window}>
        <div className={style.title}>Date</div>
        <div className={style.wrapper}>
          <div className={style.select}>
            <AiOutlineCalendar />
            <div
              className={style.user}
            >
              {selectedWeek
                ? `${selectedWeek[0].toLocaleDateString()} - ${selectedWeek[6].toLocaleDateString()}`
                : 'Select Date'}
            </div>
            <MdOutlineArrowDropUp />
          </div>

        </div>
      </div>
      {open ? (
        <div className={style.dropdown}>
          <DatePicker onDateChange={dateChangeHandler} />

        </div>
      ) : null}
    </div>

  );
};

export default DateInput;
