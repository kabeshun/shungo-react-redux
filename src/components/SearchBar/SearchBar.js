import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="input"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
