import * as React from 'react'
import { Dashboard } from './layouts/Dashboard'
import { Trade } from './layouts/Trade'

import { Provider } from 'react-redux'
import { configureStore } from './store'

const store = configureStore()

enum View {
  dashboard,
  trade,
}
interface State {
  currentView: View
}
export class App extends React.Component<{}, State> {
  public state = {
    currentView: View.dashboard,
  }

  public changeView = () => {
    const newView = this.state.currentView === View.dashboard ? View.trade : View.dashboard
    this.setState({ currentView: newView })
  }

  public currentView = () => {
    return this.state.currentView === View.dashboard
      ? <Dashboard changeView={this.changeView} />
      : <Trade changeView={this.changeView} />
  }

  public render() {
    return (
      <Provider store={store as any}>
        {this.currentView()}
      </Provider>
    )

  }
}
