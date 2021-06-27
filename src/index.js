import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import unsplash from "./api/unsplash";
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
