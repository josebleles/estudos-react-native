import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StatusBar } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import { useDispatch, useSelector } from 'react-redux';

export default function AppInside() {
    const [user, setUser] = useState(0);
    
    const { logando, erro_login } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ height:"100%", width:"100%", backgroundColor:"#1313" }}>
                <TextInput style={styles.editText} placeholder="Login" onChangeText={(text) => setUser( {...user, login: text } )} />
                <TextInput style={styles.editText} secureTextEntry={true} placeholder="Senha" onChangeText={(text)=> setUser({...user, senha: text })} />
                { erro_login && <Text> { erro_login } </Text> }
                { logando && <Text> Logando </Text> }
                <Button title="Login" onPress={()=>dispatch({type:"LOGIN", user})} />
            </SafeAreaView>
        </>
    );

}

const styles = {
    editText:{
        height:50,
        backgroundColor: "#fff",
        width:"90%",
        margin:10,
        padding:10,
    },
}
