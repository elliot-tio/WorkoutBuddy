/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet } from 'react-native'
import React from 'react'

import { APP_NAME, DARK_PRIMARY_COLOR } from './constants'
import MainScreen from './main_screen'
import DetailsScreen from './details_screen'
import SettingsScreen from './settings_screen'
import AddWorkoutsScreen from './add_workouts_screen'

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: DARK_PRIMARY_COLOR
  },
  appHeaderTitle: {
    color: 'black',
    alignSelf: 'center'
  }
})

class HomeScreen extends React.Component {
  render() {
    return (<MainScreen />)
  }
}
const WB = createStackNavigator({
  MainScreen: { screen: MainScreen },
  Details: { screen: DetailsScreen },
  Settings: { screen: SettingsScreen },
  AddWorkouts: { screen: AddWorkoutsScreen }
}, {
  navigationOptions: {
    headerStyle: styles.appHeader,
    headerTitleStyle: styles.appHeaderTitle,
    title: APP_NAME,
    headerTintColor: 'black'
  }
})

export default createAppContainer(WB)