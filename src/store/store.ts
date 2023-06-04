import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, persistStore,
    PERSIST,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { rootReducer } from './rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'theme', 'favMovies'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,
                REHYDRATE,
                PAUSE,
                PURGE,
                PERSIST,
                REGISTER],
        },
    }).concat(thunkMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;