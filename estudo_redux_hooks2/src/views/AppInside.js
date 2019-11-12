import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function() {
    const usuarios = useSelector(state => state.usuarios);
    const dispatch = useDispatch();

    function disparar(){
        dispatch({type:"ADD_USER", action: "teste"});
    }
    return (
        <View>
            {usuarios &&
            <FlatList 
            data={usuarios}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={item => item.id}
            />}
            <Button title="Button" onPress={()=>{disparar()}} />
        </View>
    );
};

