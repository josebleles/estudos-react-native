//import { } from 'react-redux';

const TYPES = {
    ADD_USER: "ADD_USER",
};

const INITIAL_STATE = {
    usuarios:[]
} 
export default redux = (state = INITIAL_STATE, action) => {
    if(action.type == ADD_USER){
        return { ...state, usuarios: [...state.usuarios, {nome:"Jose"}]}
    }

    return state;
};
