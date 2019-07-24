import React from "react";
import Pokedex from "./PokedexContainer";
import { Provider } from "react-redux";
import configureStore from './store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
};

export default App;
