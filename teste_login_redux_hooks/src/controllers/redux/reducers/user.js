import { API_URL } from '../../constants';

const TYPES = {
    LOGIN:"LOGIN",
    ERRO_LOGIN:"ERRO_LOGIN",
    SUCESSO_LOGIN:"SUCESSO_LOGIN", 
};

export default (state = {} , action) => {

    if(action.type == TYPES.LOGIN){
        login(action.user, action.asyncDispatch);
        return { logando: true };
    }

    if(action.type == TYPES.ERRO_LOGIN){
        return { erro_login: action.erro };
    }

    if(action.type == TYPES.SUCESSO_LOGIN){
        return { user: action.user };
    }

    return state;
};

// --------------- ACTIONS -----------------

const login = (user, dispatcher)=> {
    fetch(API_URL+"/login", {
        headers: new Headers(
            ["SECRET_KEY", "aAAAAA"]
        ),
        body: JSON.stringify(user),
        method: "POST"
    }).then((str) => {
        const res = JSON.parse(str);
        if(res.sucesso){
            return dispatcher({type:TYPES.SUCESSO_LOGIN, user: res.user });
        }else{
            return dispatcher({type:TYPES.ERRO_LOGIN, erro_login: res.erro });
        }
    }).catch((err) => {
        return dispatcher({type:TYPES.ERRO_LOGIN, erro: "Erro ao tentar se autenticar "+err });
    });
}
