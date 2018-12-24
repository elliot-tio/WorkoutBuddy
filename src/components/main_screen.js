import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'

import WorkoutList from './list'
import Touchable from 'react-native-platform-touchable'

import { ACCENT_COLOR, PRIMARY_COLOR, APP_NAME, TEXT_COLOR, DARK_PRIMARY_COLOR, LIGHT_PRIMARY_COLOR } from './constants'

export default class MainScreen extends Component<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTitleStyle: {
      color: 'black',
      alignSelf: 'center'
    },
    title: APP_NAME,
    headerTintColor: 'black',
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <WorkoutList />
        <View style={styles.buttons}>
          <Touchable
            onPress={() => this.props.navigation.navigate('Settings')}
            style={styles.button}
            background={Touchable.Ripple(LIGHT_PRIMARY_COLOR)}
          >
            <Text style={styles.text}>Settings</Text>
          </Touchable>
          <Touchable
            onPress={() => this.props.navigation.navigate('AddWorkouts')}
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
    borderRadius: 10
  },
  buttonStart: {
    backgroundColor: ACCENT_COLOR,
    flex: 0.5,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: TEXT_COLOR
  },
})