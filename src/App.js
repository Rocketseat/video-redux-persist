import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoList />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
