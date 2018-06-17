import React from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import { WithRouterProps } from '.'
import { TradeForm } from '../containers/TradeForm'

export class Trade extends React.Component<WithRouterProps> {
  public render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.form}>
          <TradeForm />
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Go back' onPress={this.props.goBack} />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 3,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
})
