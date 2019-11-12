import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
export const App = () => {
  return (
    <Provider store={store}>
      <View>
        <FlatList 
          data={[{title:"jsoe", id:1},{title:"jsoe", id:2}]}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
