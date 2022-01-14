import Input from '../Input/Input';
import style from './row.module.scss';
import DateInput from '../Input/DateInput/DateInput';
import HoursInput from '../Input/Hours/HoursInput';

type RowProps = {
  title: String
}

const Row = ({ title }: RowProps) => (
  <div className={style.row}>
    <HoursInput dayName={title} />
    <div className={style.sum}>€ 90</div>
  </div>
);

export default Row;
