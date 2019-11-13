import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StatusBar} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function AppInside() {
    const user = {}; //useState(0);
    const { logando, erro_login } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{height:"100%", width:"100%", backgroundColor:"#faf"}}>
                <TextInput onChangeText={(text)=>console.log(text)} />
                {erro_login && <Text> {erro_login} </Text>}
                {logando && <Text> Logando </Text>}
                <Button title="Login" onPress={()=>dispatch({type:"LOGIN", user})} />
            </SafeAreaView>
        </>
    );

}
