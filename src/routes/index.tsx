import { goBack, push, replace } from 'connected-react-router'
import { ComponentType } from 'react'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  goToView: push,
  goBack,
}

export type WithRouterProps = typeof mapDispatchToProps
const withRouter = (component: ComponentType<WithRouterProps>) => connect(null, mapDispatchToProps)(component)

const loadable = (path: string) => Loadable({
  loader: () => import(`../${process.env.WEB ? 'web' : 'native'}/layouts/${path}`),
  loading: () => null,
  render: (Loaded, props: WithRouterProps) => <Loaded {...props} />,
})
export const ConnectedDashboard = withRouter(loadable('Dashboard'))
export const ConnectedTrade = withRouter(loadable('Trade'))
