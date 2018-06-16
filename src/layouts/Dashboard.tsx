import React from 'react'
import { View, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import { Direction } from '../types/enums';
import { DepthContainer } from '../containers/Depth';

interface Props {
  changeView: () => any
}
export class Dashboard extends React.Component<Props> {
  onTradePress = () => this.props.changeView()
  render() {
    return (
      <View style={styles.dashboardContainer}>
        <DepthContainer direction={Direction.sell} style={styles.depth} />
        <View style={styles.tradeButtons}>
          <Button title="Place Trade" onPress={this.onTradePress} />
        </View>
        <DepthContainer direction={Direction.buy} style={styles.depth} />
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