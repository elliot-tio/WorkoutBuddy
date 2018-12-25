import React, { Component } from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import { Overlay } from 'react-native-elements'

import Touchable from 'react-native-platform-touchable'
import DateTimePicker from 'react-native-modal-datetime-picker'
import RNPicker from 'react-native-picker-select'
import { TextField } from 'react-native-material-textfield'

import {
  PRIMARY_TEXT,
  PRIMARY_COLOR,
  ACCENT_COLOR,
  LIGHT_PRIMARY_COLOR,
  BODY_AREAS,
  WORKOUTS,
  TEXT_COLOR,
  SUBMIT_BORDER_RADIUS,
  ADD_BORDER_RADIUS,
  BORDER_RADIUS,
} from './constants'

export default class AddWorkout extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
    },
    headerTitleStyle: {
      color: 'black',
      alignSelf: 'center',
    },
    title: 'Add Workout',
    headerTintColor: 'black',
  }

  constructor(props) {
    super(props)

    this.state = {
      isDateTimePickerVisible: false,
      isOverlayVisible: false,
      date: new Date().toDateString(),
      selectedArea: '',
      otherArea: '',
      selectedWorkout: '',
      otherWorkout: '',
      reps: 0,
      weight: 0,
      units: ['lbs', 'kg'],
      bodyAreas: BODY_AREAS,
      workouts: WORKOUTS,
      isWorkoutManual: false,
      isAreaManual: false,
      sets: [],
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

  _addSet = () => {
    this.setState({ isOverlayVisible: true })
    console.log('Adding set...')
  }

  onSubmit = () => {
    const { selectedArea, selectedWorkout, otherWorkout } = this.state
    console.log('Submitted!')
    console.log('Selected Area:', selectedArea)
    console.log('Selected Workout:', selectedWorkout)
    console.log('Other Workout:', otherWorkout)
  }

  render() {
    const {
      date,
      isDateTimePickerVisible,
      selectedArea,
      bodyAreas,
      selectedWorkout,
      workouts,
      isWorkoutManual,
      isAreaManual,
      isOverlayVisible,
    } = this.state

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Date:</Text>

          <Touchable
            onPress={this._showDateTimePicker}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{date}</Text>
          </Touchable>
        </View>

        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          maximumDate={new Date()}
        />

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Muscle Group:</Text>
          <RNPicker
            value={selectedArea}
            onValueChange={this._handleAreaPicker}
            items={bodyAreas}
          />
          { isAreaManual
            && (
            <TextField
              label=""
              placeholder="Enter an area..."
              style={{ marginLeft: 7 }}
              tintColor={PRIMARY_COLOR}
              activeLineWidth={1}
              linewidth={1}
              onChangeText={text => this.setState({ otherArea: text })}
            />
            )
          }
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textSmall}>Workout:</Text>
          <RNPicker
            value={selectedWorkout}
            onValueChange={this._handleWorkoutPicker}
            items={workouts}
          />
          { isWorkoutManual
            && (
            <TextField
              label=""
              placeholder="Enter a workout..."
              style={{ marginLeft: 7 }}
              tintColor={PRIMARY_COLOR}
              activeLineWidth={1}
              linewidth={1}
              onChangeText={text => this.setState({ otherWorkout: text })}
            />
            )
          }
        </View>

        <View style={{ flexDirection: 'row', flex: 0.2 }}>
          <Text style={styles.textSmall}>Sets:</Text>
          <Touchable
            onPress={this._addSet}
            style={styles.buttonAdd}
            background={Touchable.Ripple(LIGHT_PRIMARY_COLOR, true)}
          >
            <Text style={styles.textSubmit}>+</Text>
          </Touchable>
        </View>

        <Overlay
          isVisible={isOverlayVisible}
          onBackdropPress={() => this.setState({ isOverlayVisible: false })}
        >
          <Text>Hello</Text>
        </Overlay>

        <Touchable
          onPress={this.onSubmit}
          background={Touchable.Ripple(LIGHT_PRIMARY_COLOR, true)}
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
    paddingRight: 20,
  },
  textSmall: {
    color: PRIMARY_TEXT,
    fontSize: 20,
    padding: 10,
  },
  buttonText: {
    color: TEXT_COLOR,
  },
  button: {
    height: 'auto',
    width: 'auto',
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
  buttonAdd: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: ADD_BORDER_RADIUS,
    marginLeft: 'auto',
  },
  buttonSubmit: {
    height: 'auto',
    width: 'auto',
    backgroundColor: ACCENT_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: SUBMIT_BORDER_RADIUS,
  },
  textSubmit: {
    fontSize: 20,
    padding: 10,
    color: TEXT_COLOR,
  },
})
