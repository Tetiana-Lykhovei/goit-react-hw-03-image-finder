import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((img) => (
        <ImageGalleryItem openModal={openModal} img={img} key={img.id} />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.array.isRequired,
  openModal: propTypes.func.isRequired,
};
