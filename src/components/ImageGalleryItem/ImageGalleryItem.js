import propTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImagesGalleryItem = ({ img, openModal }) => {
  const { webformatURL, tags } = img;
  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={() => openModal(img)}
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};
export default ImagesGalleryItem;

ImagesGalleryItem.propTypes = {
  openModal: propTypes.func.isRequired,
};
