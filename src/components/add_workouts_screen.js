import React, { Component } from 'react'
import { StyleSheet, View, Text, Slider } from 'react-native'

import Touchable from 'react-native-platform-touchable'
import DateTimePicker from 'react-native-modal-datetime-picker'
import RNPicker from 'react-native-picker-select'
import { TextField } from 'react-native-material-textfield'

import { 
  PRIMARY_TEXT,
  PRIMARY_COLOR,
  ACCENT_COLOR,
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  BODY_AREAS,
  WORKOUTS,
  SETS_RANGE,
  TEXT_COLOR
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
    title: 'Add Workout',
    headerTintColor: 'black',
  }
  constructor(props) {
    super(props)

    this.state = {
      isDateTimePickerVisible: false,
      date: new Date().toDateString(),
      selectedArea: '',
      otherArea: '',
      selectedWorkout: '',
      otherWorkout: '',
      sets: 0,
      reps: 0,
      weight: 0,
      units: ['lbs', 'kg'],
      bodyAreas: BODY_AREAS,
      workouts: WORKOUTS,
      range: SETS_RANGE,
      isWorkoutManual: false,
      isAreaManual: false,
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked:', date)
    this.setState({ date: date.toDateString() })
    this._hideDateTimePicker()
  }

  _showAreaInput = () => this.setState({ isAreaManual: true })

  _hideAreaInput = () => this.setState({ isAreaManual: false })

  _handleAreaPicker = (area) => {
    this.setState({ selectedArea: area })
    if (area === 'other') {
      this._showAreaInput()
    } else {
      this.setState({ otherArea: '' })
      this._hideAreaInput()
    }
  }

  _showWorkoutInput = () => this.setState({ isWorkoutManual: true })

  _hideWorkoutInput = () => this.setState({ isWorkoutManual: false })

  _handleWorkoutPicker = (workout) => {
    this.setState({ selectedWorkout: workout })
    if (workout === 'other') {
      this._showWorkoutInput()
    } else {
      this.setState({ otherWorkout: '' })
      this._hideWorkoutInput()
    }
  }

  onSubmit = () => {
    console.log('Submitted!')
    console.log('Selected Area:', this.state.selectedArea)
    console.log('Selected Workout:', this.state.selectedWorkout)
    console.log('Other Workout:', this.state.otherWorkout)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Date:</Text>

          <Touchable
            onPress={this._showDateTimePicker}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{this.state.date}</Text>
          </Touchable>
        </View>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          maximumDate={new Date}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Muscle Group:</Text>
          <RNPicker
            value={this.state.selectedArea}
            onValueChange={this._handleAreaPicker}
            items={this.state.bodyAreas}/>
          { this.state.isAreaManual &&
            <TextField
              label=''
              placeholder='Enter an area...'
              style={{ marginLeft: 7 }}
              tintColor={PRIMARY_COLOR}
              activeLineWidth={1}
              linewidth={1}
              onChangeText={(text) => this.setState({ otherArea: text})}
            />
          }
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Workout:</Text>
          <RNPicker
            value={this.state.selectedWorkout}
            onValueChange={this._handleWorkoutPicker}
            items={this.state.workouts}/>
          { this.state.isWorkoutManual &&
            <TextField
              label=''
              placeholder='Enter a workout...'
              style={{ marginLeft: 7 }}
              tintColor={PRIMARY_COLOR}
              activeLineWidth={1}
              linewidth={1}
              onChangeText={(text) => this.setState({ otherWorkout: text})}
            />
          }
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Sets:</Text>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Reps:</Text>
        </View>

        <Touchable
            onPress={this.onSubmit}
            style={styles.buttonSubmit}
        >
          <Text style={styles.textSubmit}>Add Workout</Text>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    backgroundColor: LIGHT_PRIMARY_COLOR,
    paddingLeft: 20,
    paddingRight: 20
  },
  textSmall: {
    color: PRIMARY_TEXT,
    fontSize: 20,
    padding: 10,
  },
  buttonText: {
    color: TEXT_COLOR
  },
  picker: {
    padding: 10
  },
  button: {
    height: 'auto',
    width: 'auto',
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonSubmit: {
    height: 'auto',
    width: 'auto',
    backgroundColor: ACCENT_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  textSubmit: {
    fontSize: 20,
    padding: 10,
    color: TEXT_COLOR
  },
})
