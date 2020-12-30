import {applyMiddleware, createStore} from 'redux'

//persist store is used for chaching

import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer'

import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export {store,persistor}