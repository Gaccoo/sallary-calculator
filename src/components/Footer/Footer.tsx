import style from './footer.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <div className={style.summaryRow}>
      <span>Hours worked</span>
      <span>60</span>
    </div>

    <div className={style.summaryRow}>
      <span>Salary</span>
      <span>900</span>
    </div>
  </div>
);

export default Footer;
