//import { } from 'react-redux';
const TYPES = {
    ADD_USER: "ADD_USER",
};

const INITIAL_STATE = {
}


export default reduxTeste = (state = INITIAL_STATE, action) => {
    if(action.type == TYPES.ADD_USER){
        return { ...state, usuarios: state.usuarios? [ ...state.usuarios, {title:"Jose", id: Math.random()}] : [{title:"Jose", id: Math.random()}]}
    }

    return state;
};


// -_-_-_-_-_
