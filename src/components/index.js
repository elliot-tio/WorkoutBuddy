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

import MainScreen from './main_screen'
import DetailsScreen from './details_screen'
import SettingsScreen from './settings_screen'
import AddWorkoutsScreen from './add_workouts_screen'

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
})

export default createAppContainer(WB)