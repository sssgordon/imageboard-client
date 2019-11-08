import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>hello world</div>
      </Provider>
    );
  }
}

export default App;
