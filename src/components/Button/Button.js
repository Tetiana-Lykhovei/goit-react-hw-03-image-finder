import propTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ loadMore }) => {
  console.log(loadMore);
  return (
    <button onClick={loadMore} className={s.Button}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};
