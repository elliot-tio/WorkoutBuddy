import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'
import { PRIMARY_COLOR } from './constants'

export default class WorkoutList extends Component {
  constructor() {
    super()
    const list = [
      {
        name: 'Example 1',
        subtitle: 'Example 1',
      },
      {
        name: 'Example 2',
        subtitle: 'Example 2',
      },
      {
        name: 'Example 3',
        subtitle: 'Example 3',
      },
      {
        name: 'Example 4',
        subtitle: 'Example 4',
      },
      {
        name: 'Example 5',
        subtitle: 'Example 5',
      },
      {
        name: 'Example 6',
        subtitle: 'Example 6',
      },
      {
        name: 'Example 7',
        subtitle: 'Example 7',
      },
      {
        name: 'Example 8',
        subtitle: 'Example 8',
      },
    ]
    this.state = {
      list,
    }
  }

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      onPress={() => console.log(item.name)}
      underlayColor={PRIMARY_COLOR}
    />
  )

  render() {
    const { list } = this.state
    return (
      <View style={{ flex: 2 }}>
        <FlatList
          ItemSeparatorComponent={() => (
            <Divider />
          )}
          keyExtractor={item => item.name}
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
