import React from 'react'
import { Button, StatusBar, StyleSheet, View } from 'react-native'
import { Depth } from '../../containers/Depth'
import { WithRouterProps } from '../../routes'
import { Direction, ViewPath } from '../../types/enums'

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
    flex: 5,
  },
  tradeButtons: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
})

export default Dashboard
