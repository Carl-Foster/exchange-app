import React from 'react'
import { Alert, Button, StatusBar, StyleSheet, View } from 'react-native'
import { Depth } from '../containers/Depth'
import { Direction } from '../types/enums'

interface Props {
  changeView: () => any
}
export class Dashboard extends React.Component<Props> {
  public onTradePress = () => this.props.changeView()
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
