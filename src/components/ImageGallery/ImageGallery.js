import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {gallery.map((img) => (
        <ImageGalleryItem openModal={openModal} img={img} key={img.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  gallery: propTypes.array.isRequired,
  openModal: propTypes.func.isRequired,
};
