import { API_URL } from '../../constants';
import { useDispatch } from 'react-redux';

const TYPES = {
    LOGIN = "LOGIN",
    ERRO_LOGIN = "ERRO_LOGIN",
    SUCESSO_LOGIN = "ERRO_LOGIN", 
};


const user = (state, action) => {

    if(action == LOGIN){
        login(action.user);
        return {...state, logando: true };
    }

    if(action == ERRO_LOGIN){
        return {...state, logando: false, erro_login: action.erro };
    }

    if(action == SUCESSO_LOGIN){
        return {...state, logando: false, user: action.user };
    }

    return state;
};

// --------------- ACTIONS -----------------


const login = user => {
    fetch(API_URL+"/login", {
        headers: new Headers(
            ["SECRET_KEY", "aAAAAA"]
        ),
        body: JSON.stringify(user) 
    }).then((str) =>{
        const res = JSON.parse(str);
        if(res.sucesso){
            useDispatch({type:TYPES.SUCESSO_LOGIN, user: res.user });
        }else{
            useDispatch({type:TYPES.ERRO_LOGIN, erro_login: res.erro });
        }
    }).catch((err)=>{
        useDispatch({type:TYPES.ERRO_LOGIN, erro_login: "Erro ao tentar se autenticar" });
    });
}

export default user;