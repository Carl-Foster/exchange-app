import React from 'react'
import { Direction } from '../types/enums';
import { OrderType } from '../types/interfaces';
import { View, Text, StyleSheet } from 'react-native';


interface OrderProps extends OrderType {
  direction: Direction
  index: number
}

export class Order extends React.Component<OrderProps> {
  getOpacity = () => ({ opacity: 1 - (this.props.index * 0.4) })
  render() {
    const directionStyle = styles[this.props.direction]
    return (
      <View style={[styles.order, this.getOpacity()]}>
        <Text style={[styles.orderText, directionStyle]}>{this.props.amount}@{this.props.price}</Text>
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
  buy: {
    color: 'hsl(141, 71%, 48%)'
  },
  sell: {
    color: 'hsl(348, 100%, 61%)',
  }
})