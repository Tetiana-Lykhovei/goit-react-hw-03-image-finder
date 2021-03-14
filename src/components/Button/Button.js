import propTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <div className={s.BtnCentered}>
      <button onClick={loadMore} className={s.Button}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};
