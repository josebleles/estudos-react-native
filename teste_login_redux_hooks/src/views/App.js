import React from 'react';
import { View } from 'react-native';
import { Provider }  from 'react-redux';
import store from '../controllers/redux/store';

import AppInside from './inside/AppInside.js';

export default function App(){

  return (
    <Provider store={store}>
      <AppInside />
    </Provider>
  );
  
};

