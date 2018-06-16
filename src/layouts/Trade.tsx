import React from 'react'
import { View, Button, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { placeOrder } from '../services/exchange';
import { Direction } from '../types/enums';

interface TradeProps {
  changeView: () => any
}

interface State {
  price: number
  quantity: number
  editingPrice: string
  editingQuantity: string
}
export class Trade extends React.Component<TradeProps, State> {
  state = {
    price: 0,
    quantity: 0,
    editingPrice: '',
    editingQuantity: '',
  }

  setValues = () => this.setState({
    price: Number(this.state.editingPrice),
    quantity: Number(this.state.editingQuantity),
  })
  handleChange = (newValue: string, key: keyof State) => {
    this.setState((prevState) => ({ ...prevState, [key]: newValue }))
  }
  buy = async () => {
    this.setValues()
    const { price, quantity } = this.state
    await placeOrder({
      price,
      quantity,
      direction: Direction.buy,
    })

    this.props.changeView()
  }
  sell = async () => {
    this.setValues()
    const { price, quantity } = this.state
    await placeOrder({
      price,
      quantity,
      direction: Direction.sell,
    })

    this.props.changeView()
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.inputs}
            keyboardType='numeric'
            placeholder='Price'
            autoFocus={true}
            value={this.state.editingPrice}
            returnKeyType='next'
            onChangeText={(ev) => this.handleChange(ev, 'editingPrice')}
            onSubmitEditing={this.setValues}
          />
          <TextInput
            style={styles.inputs}
            keyboardType='numeric'
            placeholder='Quantity'
            value={this.state.editingQuantity}
            onChangeText={(ev) => this.handleChange(ev, 'editingQuantity')}
            onSubmitEditing={this.setValues}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.tradeButtons}>
            <View style={styles.button}>
              <Button title='Buy' onPress={this.buy} />
            </View>
            <View style={styles.button}>
              <Button title='Sell' onPress={this.sell} />
            </View>
          </View>
          <View style={styles.button}>
            <Button title='Go back' onPress={this.props.changeView} />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tradeButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  inputsContainer: {
    flex: 2,
    padding: 20,
    justifyContent: 'flex-end'
  },
  inputs: {
    padding: 5,
  }
})