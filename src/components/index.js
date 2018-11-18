/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'

import List from './list/list'
import TileButton from './button/button'

import { ACCENT_COLOR } from './constants'

type Props = {}
export default class WorkoutBuddy extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <List />
        <View style={styles.buttons}>
          <TileButton text='Details' />
          <TileButton text='Settings' />
        </View>
        <TileButton text='Add Workout' />
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
})