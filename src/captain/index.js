import {createStore,applyMiddleware,compose} from "redux";
import {persistStore,persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import reducers from "./reducer";

const middlewares = [
    thunk,
];

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers);

const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export default {
    store,
    persistor
}