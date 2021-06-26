import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="input"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
