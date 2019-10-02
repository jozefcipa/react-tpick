
export interface Props {
  hours: number
  minutes: number
  hoursStep?: number
  minutesStep?: number
  onChange: ({ hours, minutes }: { hours: number, minutes: number }) => void
}

export interface ChangeValueParams {
  minutesValue?: number
  hoursValue?: number
  step: number
}
