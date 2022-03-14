import React, { Component } from "react";
import ReactDOM from "react-dom";

import Main from "./components/main.js";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
// import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://redux.js.org/introduction/examples
