import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ApplicationReducers';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

let middlewares = [thunk];
if (__DEV__) {
  middlewares.push(logger);
}
const reducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
};
const pReducer = persistReducer(persistConfig, reducer);

export let store;
let persistor;

const configureStore = async () =>
  new Promise((resolve, reject) => {
    try {
      store = createStore(
        pReducer,
        {},
        compose(applyMiddleware(...middlewares)),
      );
      persistor = persistStore(store, {}, () => resolve({store, persistor}));
    } catch (err) {
      reject(err);
    }
  });

export default configureStore;
