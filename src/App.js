import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Routes from "./routes/Routes";

const App = () => {


  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
     
    </div>
  );
};

export default App;
