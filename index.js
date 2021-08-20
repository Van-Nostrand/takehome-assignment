import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./src/scss/main.scss";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const AppWithProvisions = () => {
  const store = configureStore();
  

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


ReactDOM.render(<AppWithProvisions />, document.getElementById("root"));