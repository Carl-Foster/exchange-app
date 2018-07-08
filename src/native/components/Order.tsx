import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Direction } from '../../types/enums'
import { OrderType } from '../../types/interfaces'

interface OrderProps extends OrderType {
  direction: Direction
  index: number
}

export class Order extends React.Component<OrderProps> {
  public getOpacity = () => ({ opacity: 1 - (this.props.index * 0.4) })
  public render() {
    const directionStyle = styles[this.props.direction]
    return (
      <View style={[styles.order, this.getOpacity()]}>
        <Text style={[styles.orderText, directionStyle]}>{this.props.quantity}@{this.props.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  order: {
    padding: 10,
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  [Direction.buy]: {
    color: 'hsl(141, 71%, 48%)',
  },
  [Direction.sell]: {
    color: 'hsl(348, 100%, 61%)',
  },
})
