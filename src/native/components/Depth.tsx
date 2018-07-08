import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DepthProps } from '../../containers/Depth'
import { Direction } from '../../types/enums'
import { Order } from './Order'

export class Depth extends React.Component<DepthProps> {
  public componentDidMount() {
    this.props.getDepth(this.props.direction)
  }

  public render() {
    return (
      <View style={[this.props.style, styles.depthContainer, styles[this.props.direction]]}>
        {this.renderOrders()}
      </View>
    )
  }

  private renderOrders = () => {
    return this.props.orders.map((order, i) => (
      <Order
        {...order}
        direction={this.props.direction}
        key={order.price}
        index={i}
      />
    ))
  }

}

const styles = StyleSheet.create({
  depthContainer: {
    justifyContent: 'flex-start',
  },
  [Direction.buy]: {
    flexDirection: 'column',
  },
  [Direction.sell]: {
    flexDirection: 'column-reverse',
  },
})
