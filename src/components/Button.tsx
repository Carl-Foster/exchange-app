import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string
  onPress: () => any
}
export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
})