import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
