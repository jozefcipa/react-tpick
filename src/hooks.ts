import * as React from 'react'
import { Time, UpdateTimeParams, UpdateTimeSegment, UseTimeHook } from './types'
import { checkHoursStep, checkMinutesStep, getIncreasedValueOrReset } from './utils'

const MAX_HOURS = 23
const MAX_MINUTES = 59

export const useTime = (initValue: Time): UseTimeHook => {
  const [hours, setHours] = React.useState(initValue.hours)
  const [minutes, setMinutes] = React.useState(initValue.minutes)

  const setTime = (time: Time): void => {
    setHours(time.hours)
    setMinutes(time.minutes)
  }

  const increment = (updateObj: UpdateTimeParams): Time => {
    const newTime = { hours, minutes }

    // increment hours
    if (updateObj.update === UpdateTimeSegment.Hours) {
      checkHoursStep(updateObj.step, MAX_HOURS)
      const newHours = hours + updateObj.step
      newTime.hours = getIncreasedValueOrReset(newHours, MAX_HOURS)
    }

    // increment minutes
    if (updateObj.update === UpdateTimeSegment.Minutes) {
      checkMinutesStep(updateObj.step, MAX_MINUTES)
      const newMinutes = minutes + updateObj.step
      if (newMinutes > MAX_MINUTES) {
        newTime.minutes = 0
        // TODO: increment hours
        // if (true) { // TODO: come up with some prop name
        //   newTime.hours = getIncreasedValueOrReset(newTime.hours + 1, MAX_HOURS)
        // }
      } else {
        newTime.minutes = newMinutes
      }
    }
    return newTime
  }

  const decrement = (updateObj: UpdateTimeParams): Time => {
    const newTime = { hours, minutes }

    // decrement hours
    if (updateObj.update === UpdateTimeSegment.Hours) {
      checkHoursStep(updateObj.step, MAX_HOURS)
      const newHours = hours - updateObj.step
      if (newHours < 0) {
        newTime.hours = MAX_HOURS
      } else {
        newTime.hours = newHours
      }
    }

    // decrement minutes
    if (updateObj.update === UpdateTimeSegment.Minutes) {
      checkMinutesStep(updateObj.step, MAX_MINUTES)
      const newMinutes = minutes - updateObj.step
      if (newMinutes < 0) {
      // TODO: decrement hours
        newTime.minutes = (MAX_MINUTES + 1) - updateObj.step
      } else {
        newTime.minutes = newMinutes
      }
    }
    return newTime
  }

  return [
    { hours, minutes },
    { increment, decrement, setTime },
  ]
}
