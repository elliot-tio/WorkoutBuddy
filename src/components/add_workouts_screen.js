import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Picker, Slider } from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker'

import { 
  PRIMARY_TEXT,
  PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  BODY_AREAS,
  WORKOUTS,
  SETS_RANGE
} from './constants'

export default class AddWorkout extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTitleStyle: {
      color: 'black',
      alignSelf: 'center'
    },
    title: 'Start Workout',
    headerTintColor: 'black',
  }
  constructor(props) {
    super(props)

    this.state = {
      isDateTimePickerVisible: false,
      date: new Date().toDateString(),
      selectedArea: '',
      selectedWorkout: '',
      sets: 0,
      reps: 0,
      weight: 0,
      units: ['lbs', 'kg'],
      bodyAreas: BODY_AREAS,
      workouts: WORKOUTS,
      range: SETS_RANGE
    }
  }


  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked:', date)
    this.setState({ date: date.toDateString() })
    this._hideDateTimePicker()
  }

  onSubmit = () => {
    console.log('Submitted!')
  }

  render() {
    let bodyAreaList = []
    let setsList = []
    let repsList = []
 
    for (let index; index < this.state.bodyAreas.length; index++) {
      let value = this.state.bodyAreas[index]
      bodyAreaList.push(<Picker.Item key={index} label={value} value={value} />)
    }

    for (let index; index < 21; index++) {
      setsList.push(<Picker.Item key={index} label={index.toString()} value={index} />)
    }

    for (let index; index < 11; index++) {
      repsList.push(<Picker.Item key={index} label={index.toString()} value={index} />)
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Add a Workout</Text>

          <Button
            onPress={this._showDateTimePicker}
            title={this.state.date}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            maximumDate={new Date}
          />

          <Text>Muscle Group:</Text>
          <Picker
            selectedValue={this.state.selectedArea}
            onValueChange={area => {
              console.log(this.bodyAreaList)
              this.setState({ selectedArea: area })}
            }>
            {bodyAreaList}
          </Picker>

          <View>
            <Text>Sets:</Text>
            <Picker
              selectedValue={this.state.sets}
              onValueChange={sets => this.setState({ sets: sets })}>
              {setsList}
            </Picker>

            <Text>Reps:</Text>
            <Picker
              selectedValue={this.state.reps}
              onValueChange={reps => this.setState({ reps: reps })}>
              {repsList}
            </Picker>

          </View>

          <Button
              onPress={this.onSubmit}
              title="Start Workout"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_PRIMARY_COLOR
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: PRIMARY_TEXT
  },
  button: {
    flex: 1,
    backgroundColor: DARK_PRIMARY_COLOR
  }
})
