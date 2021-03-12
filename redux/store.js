import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage'

import contacts from '../contacts'
import reducer from './reducer'
import {addUser, addContact} from './actions'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))

// contacts.map(itr => 
//     addContact({ 
//         ...itr, 
//         key: store.getState().contacts.length
//     })
// )

const persistor = persistStore(store)

export { store, persistor }

