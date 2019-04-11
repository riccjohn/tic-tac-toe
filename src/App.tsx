import * as React from "react";
import { render } from "react-dom";
// import "./App.css"; // TODO: Install CSS loader

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <h1>Hello from TSX Land</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
