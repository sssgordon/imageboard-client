import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";
import CreateFormContainer from "./components/CreateFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CreateFormContainer />
        <ListContainer />
      </Provider>
    );
  }
}

export default App;
