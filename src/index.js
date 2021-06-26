import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  //initializing state
  constructor(props) {
    super(props);

    //ここだけ、直接代入できる。ほかではuseStateを使う
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //we called setstate!
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
