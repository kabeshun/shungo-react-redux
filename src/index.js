import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  //initializing state
  constructor(props) {
    super(props);

    //ここだけ、直接代入できる。ほかではuseStateを使う
    this.state = { lat: null, errorMessage: "" };
  }

  //データの取得系はここがいい
  componentDidMount() {
    console.log("did mount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //we called setstate!
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        console.error(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latitude: {this.state.lat} <br />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
