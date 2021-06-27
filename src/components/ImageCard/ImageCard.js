import React, { Component } from "react";
import "./ImageCard.css";

export default class ImageCard extends Component {
  render() {
    const { descripton, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={this.props.image.urls.regular}></img>
      </div>
    );
  }
}
