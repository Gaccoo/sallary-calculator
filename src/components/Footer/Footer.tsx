import style from './footer.module.scss';

type FooterProps = {
  totalHours: number
  totalSalary: number
  loading: boolean
}

const Footer = ({
  totalHours,
  totalSalary,
  loading,
}: FooterProps) => (
  <div className={style.footer}>
    <div className={style.summaryRow}>
      <span>Hours worked</span>
      <span>
        {loading ? 0 : totalHours}
        {' '}
        h
      </span>
    </div>

    <div className={style.summaryRow}>
      <span>Salary</span>
      <span>
        {loading ? 0 : totalSalary}
        {' '}
        €
      </span>
    </div>
  </div>
);

export default Footer;
