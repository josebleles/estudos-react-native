import reducers from './reducers';
import { createStore } from 'react-redux';
// import { Container } from './styles';

const store = createStore(reducers);

export default store;