import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

import Touchable from 'react-native-platform-touchable'
import { ACCENT_COLOR } from './../constants'

export default class TileButton extends Component {
  constructor(props) {
      super(props)
      this.state = {
          text: this.props.text
      }
  }

  _onPress () {
      console.log('button pressed')
  }

  render() {
    return (
      <Touchable
        onPress={() => this._onPress()}
        style={styles.button}
      >
        <Text style={styles.text}>{this.state.text}</Text>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0.5,
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
