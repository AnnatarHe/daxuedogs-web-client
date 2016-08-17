/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/8
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store/store'
import routes from './routes/routes'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('routing').toJS()
    } 
})

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    )
}

render(<Root/>, document.body.appendChild(document.createElement('div')))
