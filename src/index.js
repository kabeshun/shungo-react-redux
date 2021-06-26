import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import axios from "axios";
class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID VzcxpX0orYbEF-NGXx5kZEExvo7eLd2RQ6SVQIbSpvg",
      },
    });

    console.log(response.data.results);
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
