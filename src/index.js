import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
class App extends React.Component {
  onSearchSubmit(term) {
    console.log("term");
    console.log(term);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
