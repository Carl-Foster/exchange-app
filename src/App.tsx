import * as React from 'react'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import { ConnectedDashboard, ConnectedTrade } from './routes'
import { configureStore } from './store'
import { ViewPath } from './types/enums'

const { store, history } = configureStore()

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store as any}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={ViewPath.dashboard} component={ConnectedDashboard} />
            <Route path={ViewPath.trade} component={ConnectedTrade} />
            <Redirect to='/dashboard' />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )

  }
}
