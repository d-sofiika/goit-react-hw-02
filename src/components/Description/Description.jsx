import css from "./description.module.css"
import { IoIosCafe } from "react-icons/io";


const Description = () => {
  return (
    <div className={css.boxDescr}>
          <div className={css.boxTitle}><h1 className={css.title}>Sip Happens Café</h1>
          <p><IoIosCafe className={css.icon} size="60" /></p></div>
      <p className={css.parag}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
