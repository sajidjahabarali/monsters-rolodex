import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Sajid",
    };
  }

  buttonHandler() {
    this.setState({ ...this.state, name: "Sajid 2" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button onClick={() => this.buttonHandler()}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
