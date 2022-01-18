import React, {
  useEffect, useRef, useState,
} from 'react';
import '../../../assets/styles/daypicker.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineArrowDropUp } from 'react-icons/md';
import style from '../input.module.scss';
import DatePicker from '../DatePicker';

type DateTimeFormatOptions = {
  day: 'numeric' | '2-digit' | undefined
  year: 'numeric' | '2-digit' | undefined
  month: 'numeric' | '2-digit' | 'short' | 'long' | 'narrow' | undefined
}

type DateInputProps = {
  selectedWeek: Date[] | null
  onDateChange: (date: Date[]) => void
}
const options: DateTimeFormatOptions = {
  day: 'numeric', month: 'short', year: 'numeric',
};
const formatDate = (input: Date) => input.toLocaleDateString('en-US', options);

const DateInput = ({
  selectedWeek,
  onDateChange,
}: DateInputProps) => {
  const [open, setOpen] = useState(false);
  const calendarWindowRef = useRef<any>(null);
  const dateChangeHandler = (value: Date[]) => {
    setOpen(false);
    onDateChange(value);
  };

  useEffect(() => {
    const isClickedOutside = (e: any) => {
      if (open && calendarWindowRef.current && !calendarWindowRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', isClickedOutside);

    return () => {
      document.removeEventListener('mousedown', isClickedOutside);
    };
  }, [open]);

  return (
    <div className={style.wrapper} onClick={() => setOpen(!open)} ref={calendarWindowRef}>

      <div className={open ? `${style.window} ${style.open}` : style.window}>
        <div className={style.title}>Date</div>
        <div className={style.wrapper}>
          <div className={style.select}>
            <AiOutlineCalendar />
            <div
              className={style.user}
            >
              {selectedWeek
                ? `${formatDate(selectedWeek[0])} - ${formatDate(selectedWeek[6])}`
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
