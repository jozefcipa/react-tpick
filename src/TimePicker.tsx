import * as React from 'react'
import { Switch, Container, Input, UpButton, DownButton } from './styled'
import { value } from './utils'
import { Props, ChangeValueParams } from './types'

const TimePicker = (props: Props) => {
  const [hours, setHours] = React.useState(props.hours)
  const [minutes, setMinutes] = React.useState(props.minutes)

  // TODO: refactor these functions, move it to separate hooks
  const increment = ({ minutesValue, hoursValue, step }: ChangeValueParams) => {
    const newTime = {
      hours,
      minutes,
    }
    if (typeof hoursValue !== 'undefined') {
      if (step > 23) {
        throw Error('Hours step cannot be larger than 23')
      }
      const newHours = hoursValue + step
      if (newHours > 23) {
        newTime.hours = 0
      } else {
        newTime.hours = newHours
      }
      setHours(newTime.hours)
    }
    if (typeof minutesValue !== 'undefined') {
      if (step > 59) {
        throw Error('Minutes step cannot be larger than 59')
      }
      const newMinutes = minutesValue + step
      if (newMinutes > 59) {
        // TODO: increment hours
        newTime.minutes = 0
      } else {
        newTime.minutes = newMinutes
      }
      setMinutes(newTime.minutes)
    }
    props.onChange(newTime)
  }

  const decrement = ({ minutesValue, hoursValue, step }: ChangeValueParams) => {
    const newTime = {
      hours,
      minutes,
    }
    if (typeof hoursValue !== 'undefined') {
      if (step > 23) {
        throw Error('Hours step cannot be larger than 23')
      }
      const newHours = hoursValue - step
      if (newHours < 0) {
        newTime.hours = 23
      } else {
        newTime.hours = newHours
      }
      setHours(newTime.hours)
    }
    if (typeof minutesValue !== 'undefined') {
      if (step > 59) {
        throw Error('Minutes step cannot be larger than 59')
      }
      const newMinutes = minutesValue - step
      if (newMinutes < 0) {
        // TODO: decrement hours
        newTime.minutes = 60 - step
      } else {
        newTime.minutes = newMinutes
      }
      setMinutes(newTime.minutes)
    }
    props.onChange(newTime)
  }

  React.useEffect(() => {
    setHours(props.hours)
    setMinutes(props.minutes)
  }, [props])

  return (
    <Container>
      <Switch>
        <UpButton onClick={() => increment({ hoursValue: hours, step: props.hoursStep || 1 })} />
        <Input
          type="text"
          value={value(hours)}
          disabled
        />
        <DownButton onClick={() => decrement({ hoursValue: hours, step: props.hoursStep || 1 })} />
      </Switch>
      <span>:</span>
      <Switch>
        <UpButton onClick={() => increment({ minutesValue: minutes, step: props.minutesStep || 1 })} />
        <Input
          type="text"
          value={value(minutes)}
          disabled
        />
        <DownButton onClick={() => decrement({ minutesValue: minutes, step: props.minutesStep || 1 })} />
      </Switch>
    </Container>
  )
}

export default TimePicker
