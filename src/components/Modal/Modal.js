import React, { Component } from "react";
import s from "./Modal.modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.showModal();
    }
  };
  render() {
    const { img } = this.props;

    return (
      <div onClick={this.props.closeModal} className={s.Overlay}>
        <div className={s.Modal}>
          <img src={img.largeImageURL} alt={img.tags} />
        </div>
      </div>
    );
  }
}
export default Modal;
