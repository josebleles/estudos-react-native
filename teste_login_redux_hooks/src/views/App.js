import React from 'react';
import { View } from 'react-native';
import { Provider }  from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../controllers/redux/store';

import AppInside from './inside/AppInside';

export default function App(){

  return (
    <Provider store={store}>
      <PersistGate loading={(<View />)} persistor={persistor}>
        <AppInside />
      </PersistGate>
    </Provider>
  );
  
};

