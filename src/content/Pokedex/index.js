import React from 'react';
import PokedexApp from './containers/Pokedex';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

const Pokedex = () => (
  <Provider store={store}>
    <PokedexApp />
  </Provider>
)

export default Pokedex