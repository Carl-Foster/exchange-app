import * as React from 'react';
import { Dashboard } from './layouts/Dashboard';
import { Trade } from './layouts/Trade';

enum View {
  dashboard,
  trade,
}
interface State {
  currentView: View
}
export class App extends React.Component<{}, State> {
  state = {
    currentView: View.dashboard,
  }

  changeView = () => {
    const newView = this.state.currentView === View.dashboard ? View.trade : View.dashboard
    this.setState({ currentView: newView })
  }

  render() {
    return this.state.currentView === View.dashboard
      ? <Dashboard changeView={this.changeView} />
      : <Trade changeView={this.changeView} />

  }
}
