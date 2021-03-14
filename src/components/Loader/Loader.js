import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

const loader = () => {
  return <Loader className={s.loader} type="Puff" />;
};
export default loader;
