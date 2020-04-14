import {createStore, combineReducers,applyMiddleware} from 'redux'
import {fotosReducer} from './reducers/fotosReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    fotos:fotosReducer
})
export const store =  createStore(rootReducer,applyMiddleware(thunk))
