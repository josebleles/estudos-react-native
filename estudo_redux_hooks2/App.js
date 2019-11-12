import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AppInside from './src/views/AppInside';
import { Provider } from 'react-redux';
import store from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppInside />
    </Provider>
  );
};

export default App;
