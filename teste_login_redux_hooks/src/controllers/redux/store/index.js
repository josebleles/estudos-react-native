import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import reducers from "../reducers";
import middlewares from "./middleware";
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(middlewares));
const persistor = persistStore(store);

export { store, persistor }