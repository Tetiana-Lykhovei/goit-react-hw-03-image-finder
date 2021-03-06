import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmitForm(this.state.query);
  };

  handleInputChange = (event) => {
    const { currentTarget } = event;
    this.setState({ query: currentTarget.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormBbuttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className={s.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
