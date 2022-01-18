import style from './row.module.scss';
import { WorkHours, WorkHoursWithSalary } from '../../data/data';

type RowProps = {
  title: String
  hours: number
  date: string
  onHoursChange: (value: WorkHours) => void
  workHoursFormatted: WorkHoursWithSalary
}

const isInputValid = (inputValue: string) => {
  const regexInput = /^[0-9\b]+$/;
  return inputValue === '' || regexInput.test(inputValue);
};

const Row = ({
  title,
  hours,
  date,
  onHoursChange,
  workHoursFormatted,
}: RowProps) => (
  <div className={style.row}>

    <div className={style.window}>
      <div className={style.title}>{title}</div>
      <input
        className={style.numberInput}
        type="text"
        value={hours}
        placeholder="0"
        onFocus={(e) => {
          e.target.placeholder = '';
        }}
        onBlur={(e) => {
          e.target.placeholder = '0';
        }}
        onChange={(e) => {
          let inputValue = e.target.value;

          if (+inputValue > 24) {
            inputValue = '24';
          }
          if (isInputValid(inputValue)) {
            onHoursChange({
              day: date,
              hours: +inputValue,
            });
          }
        }}
      />

    </div>

    <div className={style.sum}>
      {`€${workHoursFormatted.salary}`}
    </div>
  </div>
);

export default Row;
