
export interface Props {
  hours: number
  minutes: number
  hoursStep?: number
  minutesStep?: number
  onChange: ({ hours, minutes }: { hours: number, minutes: number }) => void
}

export interface Time {
  hours: number
  minutes: number
}

export enum UpdateTimeSegment {
  Hours,
  Minutes,
}

export interface UpdateTimeParams {
  update: UpdateTimeSegment
  step: number
}

export type UseTimeHook = [
  Time,
  {
    increment: (updateObj: UpdateTimeParams) => Time
    decrement: (updateObj: UpdateTimeParams) => Time
    setTime: (time: Time) => void
  }
]
