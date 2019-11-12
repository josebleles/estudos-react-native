import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        { true && <View style={{height:200, width:200, backgroundColor: "#faf"}}/> }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
