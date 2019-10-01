import * as React from 'react'
import { Switch, Container, Input, UpButton, DownButton } from './styled'
import { value } from './utils'

export interface Props {
  hours: number
  minutes: number
  hoursStep?: number
  minutesStep?: number
  onChange: ({ hours, minutes }: {hours: number, minutes: number}) => void
}

const TimePicker = (props: Props) => {
  const [hours, setHours] = React.useState(props.hours)
  const [minutes, setMinutes] = React.useState(props.minutes)

  const increment = ({ minutesValue, hoursValue, step }: { minutesValue?: number, hoursValue?: number, step: number}) => {
    if (typeof hoursValue !== 'undefined') {
      if (step > 23) {
        throw Error('Hours step cannot be larger than 23')
      }
      const newHours = hoursValue + step
      if (newHours > 23) {
        setHours(0)
      } else {
        setHours(newHours)
      }
    }
    if (typeof minutesValue !== 'undefined') {
      if (step > 59) {
        throw Error('Minutes step cannot be larger than 59')
      }
      const newMinutes = minutesValue + step
      if (newMinutes > 59) {
        setMinutes(0)
        // TODO: increment hours
      } else {
        setMinutes(newMinutes)
      }
    }
  }

  const decrement = ({ minutesValue, hoursValue, step }: { minutesValue?: number, hoursValue?: number, step: number}) => {
    if (typeof hoursValue !== 'undefined') {
      if (step > 23) {
        throw Error('Hours step cannot be larger than 23')
      }
      const newHours = hoursValue - step
      if (newHours < 0) {
        setHours(23)
      } else {
        setHours(newHours)
      }
    }
    if (typeof minutesValue !== 'undefined') {
      if (step > 59) {
        throw Error('Minutes step cannot be larger than 59')
      }
      const newMinutes = minutesValue - step
      if (newMinutes < 0) {
        setMinutes(59)
      } else {
        setMinutes(newMinutes)
      }
    }
  }

  React.useEffect(() => {
    props.onChange({ hours, minutes })
  }, [props, hours, minutes])

  return (
    <Container>
      <Switch>
        <UpButton onClick={() => increment({ hoursValue: hours, step: props.hoursStep || 1 })}/>
        <Input
          type="text"
          value={value(hours)}
          disabled
        />
        <DownButton onClick={() => decrement({ hoursValue: hours, step: props.hoursStep || 1 })}/>
      </Switch>
      <div>:</div>
      <Switch>
        <UpButton onClick={() => increment({ minutesValue: minutes, step: props.minutesStep || 1 })}/>
        <Input
          type="text"
          value={value(minutes)}
          disabled
        />
        <DownButton onClick={() => decrement({ minutesValue: minutes, step: props.minutesStep || 1 })}/>
      </Switch>
    </Container>
  )
}

export default TimePicker
