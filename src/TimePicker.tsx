import * as React from 'react'
import { useTime } from './hooks'
import { Switch, Container, Input, UpButton, DownButton } from './styled'
import { timeStringValue } from './utils'
import { Props, UpdateTimeSegment } from './types'

const TimePicker: React.FC<Props> = (props: Props) => {
  const [time, actions] = useTime({
    hours: props.hours,
    minutes: props.minutes,
  })

  // step
  const [hoursStep, setHoursStep] = React.useState(props.hoursStep || 1)
  const [minutesStep, setMinutesStep] = React.useState(props.minutesStep || 1)

  // update step timeStringValue
  React.useEffect(() => {
    setHoursStep(props.hoursStep || 1)
    setMinutesStep(props.minutesStep || 1)
  }, [props.hoursStep, props.minutesStep])

  React.useEffect(() => {
    actions.setTime({
      hours: props.hours,
      minutes: props.minutes,
    })
  }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Switch>
        <UpButton
          onClick={() => props.onChange(actions.increment({ update: UpdateTimeSegment.Hours, step: hoursStep }))}
        >
          +
        </UpButton>
        <Input type="text" value={timeStringValue(time.hours)} disabled />
        <DownButton
          onClick={() => props.onChange(actions.decrement({ update: UpdateTimeSegment.Hours, step: hoursStep }))}
        >
          -
        </DownButton>
      </Switch>
      <span>:</span>
      <Switch>
        <UpButton
          onClick={() => props.onChange(actions.increment({ update: UpdateTimeSegment.Minutes, step: minutesStep }))}
        >
          +
        </UpButton>
        <Input type="text" value={timeStringValue(time.minutes)} disabled />
        <DownButton
          onClick={() => props.onChange(actions.decrement({ update: UpdateTimeSegment.Minutes, step: minutesStep }))}
        >
          -
        </DownButton>
      </Switch>
    </Container>
  )
}

export default TimePicker
