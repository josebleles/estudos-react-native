import reducers from './reducers';
import { createStore } from 'redux';
// import { Container } from './styles';

const store = createStore(reducers);

export default store;