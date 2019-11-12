//import { } from 'react-redux';

const TYPES = {
    ADD_USER: "ADD_USER",
};

const INITIAL_STATE = {
    usuarios:[{title:"jsoe", id:Math.random()},{title:"jsoe", id:Math.random()}]
} 
export default reduxTeste = (state = INITIAL_STATE, action) => {
    if(action.type == TYPES.ADD_USER){
        return { ...state, usuarios: [...state.usuarios, {title:"Jose", id: Math.random()}]}
    }

    return state;
};
