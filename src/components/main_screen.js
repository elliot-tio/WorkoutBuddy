import React, { Component } from 'react'
import {
  StyleSheet, StatusBar, View, Text,
} from 'react-native'

import Touchable from 'react-native-platform-touchable'
import WorkoutList from './list'

import {
  ACCENT_COLOR,
  PRIMARY_COLOR,
  APP_NAME,
  TEXT_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
  BORDER_RADIUS,
} from './constants'

export default class MainScreen extends Component<void> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
    },
    headerTitleStyle: {
      color: 'black',
      alignSelf: 'center',
    },
    title: APP_NAME,
    headerTintColor: 'black',
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <WorkoutList />
        <View style={styles.buttons}>
          <Touchable
            onPress={() => navigation.navigate('Settings')}
            style={styles.button}
            background={Touchable.Ripple(LIGHT_PRIMARY_COLOR)}
          >
            <Text style={styles.text}>Settings</Text>
          </Touchable>
          <Touchable
            onPress={() => navigation.navigate('AddWorkouts')}
            style={styles.buttonStart}
            background={Touchable.Ripple(LIGHT_PRIMARY_COLOR)}
          >
            <Text style={styles.text}>Start Workout</Text>
          </Touchable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DARK_PRIMARY_COLOR,
    flex: 1,
  },
  buttons: {
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
  },
  button: {
    backgroundColor: DARK_PRIMARY_COLOR,
    flex: 0.5,
    margin: 10,
    borderRadius: BORDER_RADIUS,
  },
  buttonStart: {
    backgroundColor: ACCENT_COLOR,
    flex: 0.5,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: BORDER_RADIUS,
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: TEXT_COLOR,
  },
})
