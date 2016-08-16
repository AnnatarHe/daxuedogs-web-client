import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Map } from 'immutable'

import reducers from '../reducers/index'

const middlewares = process.env.NODE_ENV === 'production' ?
    [ thunk ] : [thunk, logger() ]

const initialState = Map()

const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f))


if (process.env !== 'production' && module.hot) {
    module.hot.accept('../reducers/index', () => {
        store.replaceReducer(require('../reducers/index'))
    })
}

// store.dispatch(getAllSeries())

export default store

