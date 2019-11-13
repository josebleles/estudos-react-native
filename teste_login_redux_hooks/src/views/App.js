import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider }  from 'redux';
import store from '../controllers/redux/store'

export default function App(){
  
  
  return (
    <Provider
      store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height:"100%", width:"100%", backgroundColor:"#faf"}}>

      </SafeAreaView>
    </Provider>
  );
  
};

