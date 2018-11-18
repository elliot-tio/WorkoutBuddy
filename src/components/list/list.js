import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is list 1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
