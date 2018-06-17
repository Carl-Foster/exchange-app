import { goBack, push, replace } from 'connected-react-router'
import { Component, connect } from 'react-redux'
import { Dashboard } from './Dashboard'
import { Trade } from './Trade'

const mapDispatchToProps = {
  goToView: push,
  goBack,
}

export type WithRouterProps = typeof mapDispatchToProps

const withRouter = (component: Component<WithRouterProps>) => connect(null, mapDispatchToProps)(component)

export const ConnectedDashboard = withRouter(Dashboard)
export const ConnectedTrade = withRouter(Trade)
