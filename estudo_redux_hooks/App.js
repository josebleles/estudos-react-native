import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
export const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
