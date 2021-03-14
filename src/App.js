import "./App.css";
import React, { Component } from "react";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/Searchbar/Searchbar";
import getFetch from "./services/PixabayApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    gallery: [],
    modal: false,
    isLoading: false,
    button: true,
    modalAbout: {},
  };

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  handleSubmitForm = (value) => {
    if (value) {
      this.setState({ isLoading: true });

      getFetch(value, 1)
        .then(({ data }) => data.hits)
        .then((data) =>
          this.setState({
            gallery: data,
            query: value,
            page: 2,
            isLoading: false,
            button: data.length === 12,
          })
        )
        .catch((error) => console.error({ error }));
    } else {
      alert("please, enter query");
    }
  };

  loadMore = () => {
    const { query, page, gallery } = this.state;
    this.setState({ isLoading: true });
    getFetch(query, page)
      .then(({ data }) => data.hits)
      .then((data) =>
        this.setState({
          gallery: [...gallery, ...data],
          isLoading: false,
          button: data.length === 12,
        })
      );
    this.setState((state) => {
      return { page: state.page + 1 };
    });
  };

  showModal = (img) => {
    const { modal } = this.state;
    img
      ? this.setState({ modalAbout: img, modal: !modal })
      : this.setState({ modal: !modal });
  };
  closeModal = (event) => {
    const { modal } = this.state;
    if (event.target.nodeName === "DIV") {
      this.setState({ modal: !modal });
    }
  };

  render() {
    return (
      <div>
        <SearchBar handleSubmitForm={this.handleSubmitForm} />
        {this.state.gallery.length === 0 ? (
          <h1 className="title">Enter your query</h1>
        ) : (
          <ImageGallery
            gallery={this.state.gallery}
            openModal={this.showModal}
          />
        )}
        {this.state.modal && (
          <Modal
            showModal={this.showModal}
            closeModal={this.closeModal}
            img={this.state.modalAbout}
          />
        )}
        {this.state.gallery.length !== 0 && this.state.button && (
          <Button loadMore={this.loadMore} />
        )}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
