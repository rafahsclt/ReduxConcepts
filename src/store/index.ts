import { applyMiddleware, createStore } from 'redux'
import { ICartState } from './modules/cart/types'
import reduxSaga from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface IState {
    cart: ICartState
}

const sagaMiddleware = reduxSaga()

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store