import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native';
import { OrderType } from '../types/interfaces';
import { Direction } from '../types/enums';
import { Order } from './Order';

interface DepthProps {
  orders: OrderType[]
  direction: Direction
  style: ViewStyle
}
export class Depth extends React.Component<DepthProps> {
  render() {
    return (
      <View style={[this.props.style, styles.depthContainer, styles[this.props.direction]]}>
        {this.props.orders.map((order, i) => (<Order {...order} direction={this.props.direction} key={order.price} index={i} />))}
      </View>
    )
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
  }
})