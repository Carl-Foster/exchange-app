import React from 'react'
import { Button, StatusBar, StyleSheet, View, ViewPagerAndroid } from 'react-native'
import { WithRouterProps } from '.'
import { Depth } from '../containers/Depth'
import { Direction, ViewPath } from '../types/enums'

export class Dashboard extends React.Component<WithRouterProps> {
  public onTradePress = () => this.props.goToView(ViewPath.trade)
  public render() {
    return (
      <View style={styles.dashboardContainer}>
        <Depth direction={Direction.sell} style={styles.depth} />
        <View style={styles.tradeButtons}>
          <Button title='Place Trade' onPress={this.onTradePress} />
        </View>
        <Depth direction={Direction.buy} style={styles.depth} />
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
  },
})
