import React from 'react'
import { DepthProps, Depth } from '../components/Depth';
import { OrderType } from '../types/interfaces';
import { getDepth } from '../services/exchange';

interface State {
  orders: OrderType[]
  interval: NodeJS.Timer | null
}
export class DepthContainer extends React.Component<Pick<DepthProps, 'style' | 'direction'>, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      orders: [],
      interval: null
    }
  }

  getOrders = async () => {
    try {
      const orders = (await getDepth(this.props.direction)).slice(0, 3)
      this.setState({ orders })
    } catch (e) {
      console.error(e)
      this.state.interval && clearInterval(this.state.interval)
    }
  }

  componentDidMount() {
    const interval = setInterval(() => this.getOrders(), 5000)
    this.setState({ interval })
    this.getOrders()
  }

  componentWillUnmount() {
    this.state.interval && clearInterval(this.state.interval)
  }

  render() {
    return <Depth {...this.props} orders={this.state.orders} />
  }
}