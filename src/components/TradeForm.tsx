import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { TradeProps } from '../containers/TradeForm'
import { Direction } from '../types/enums'
import { OrderType } from '../types/interfaces'

export class TradeForm extends React.Component<TradeProps> {
  private quantityRef!: TextInput | null
  public render() {
    const { price, quantity } = this.props
    const displayedPrice = price ? price.toLocaleString() : ''
    const displayedQuantity = quantity ? quantity.toLocaleString() : ''
    return (
      <React.Fragment>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.inputs}
            keyboardType='numeric'
            placeholder='Price'
            autoFocus={true}
            value={displayedPrice}
            returnKeyType='next'
            onChangeText={(ev) => this.handleChange(Number(ev), 'price')}
            onSubmitEditing={() => this.quantityRef && this.quantityRef.focus()}
          />
          <TextInput
            style={styles.inputs}
            ref={(ref) => this.quantityRef = ref}
            keyboardType='numeric'
            placeholder='Quantity'
            value={displayedQuantity}
            onChangeText={(value) => this.handleChange(Number(value), 'quantity')}
          />
        </View>
        <View style={styles.tradeButtons}>
          <View style={styles.button}>
            <Button title='Buy' onPress={() => this.placeOrder(Direction.buy)} />
          </View>
          <View style={styles.button}>
            <Button title='Sell' onPress={() => this.placeOrder(Direction.sell)} />
          </View>
        </View>
      </React.Fragment>
    )
  }

  private placeOrder = (direction: Direction) => {
    const { price, quantity } = this.props as NonNullable<OrderType>
    this.validateProps(price)
    this.validateProps(quantity)
    this.props.placeOrder({ direction, price, quantity })
  }

  private validateProps = (value: number | null): value is number => {
    if (!value) {
      throw new Error()
    }
    return !!value
  }

  private handleChange = (value: number, field: keyof OrderType) => this.props.handleChange({ value, field })
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 2,
    padding: 20,
    justifyContent: 'flex-end',
  },
  inputs: {
    padding: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  tradeButtons: {
    flex: 1,
    flexDirection: 'row',
  },
})
