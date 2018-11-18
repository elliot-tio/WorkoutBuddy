import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'

import List from './list'
import Touchable from 'react-native-platform-touchable'

import { ACCENT_COLOR, APP_NAME, TEXT_COLOR } from './constants'

export default class MainScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <List />
        <View style={styles.buttons}>
          <Touchable
            onPress={() => this.props.navigation.navigate('Details')}
            style={styles.button}
          >
            <Text style={styles.text}>Details</Text>
          </Touchable>
          <Touchable
            onPress={() => this.props.navigation.navigate('Settings')}
            style={styles.button}
          >
            <Text style={styles.text}>Settings</Text>
          </Touchable>
        </View>
        <Touchable
          onPress={() => this.props.navigation.navigate('AddWorkouts')}
          style={styles.button}
        >
          <Text style={styles.text}>Add Workout</Text>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ACCENT_COLOR,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flex: 0.5,
  },
  button: {
    flex: 0.5,
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: TEXT_COLOR
  }
})