import React from 'react'
import { View, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import { Depth } from '../components/Depth';
import { Direction } from '../types/enums';
import { OrderType } from '../types/interfaces';

const SELL_ORDERS: OrderType[] = [
  { amount: 20, price: 250 },
  { amount: 30, price: 300 },
]
const BUY_ORDERS: OrderType[] = [
  { amount: 10, price: 190 },
  { amount: 30, price: 180 },
]

export class Dashboard extends React.Component {
  onTradePress = () => Alert.alert('Trade', 'Now!')
  render() {
    return (
      <View style={styles.dashboardContainer}>
        <Depth direction={Direction.sell} orders={SELL_ORDERS} style={styles.depth} />
        <View style={styles.tradeButtons}>
          <Button title="Place Trade" onPress={this.onTradePress} />
        </View>
        <Depth direction={Direction.buy} orders={BUY_ORDERS} style={styles.depth} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dashboardContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  depth: {
    flex: 4,
  },
  tradeButtons: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  }
})