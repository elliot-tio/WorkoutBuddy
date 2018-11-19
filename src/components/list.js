import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { PRIMARY_TEXT, LIGHT_PRIMARY_COLOR } from './constants';

export default class WorkoutList extends Component {
  constructor() {
    super();
    const list = [
      {
        name: 'Example 1',
        subtitle: 'Example 1'
      },
      {
        name: 'Example 2',
        subtitle: 'Example 2'
      },
      {
        name: 'Example 3',
        subtitle: 'Example 3'
      },
      {
        name: 'Example 4',
        subtitle: 'Example 4'
      },
      {
        name: 'Example 1',
        subtitle: 'Example 1'
      },
      {
        name: 'Example 1',
        subtitle: 'Example 1'
      },
      {
        name: 'Example 1',
        subtitle: 'Example 1'
      },
      {
        name: 'Example 1',
        subtitle: 'Example 1'
      },
    ]
    this.state = {
      list: list
    }
  }

  renderRow ({ item }) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
          <FlatList
            data={this.state.list}
            renderItem={this.renderRow}
            keyExtractor={item => item.name}
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: LIGHT_PRIMARY_COLOR,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: PRIMARY_TEXT,
    margin: 10,
  },
})
