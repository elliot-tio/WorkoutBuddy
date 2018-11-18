import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { PRIMARY_TEXT } from './constants'

export default class Details extends Component {
  constructor(props) {
      super(props)
      this.state = {
          text: this.props.text
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the Details Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: PRIMARY_TEXT
  }
})
