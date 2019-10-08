export const timeStringValue = (val: number): string => val < 10 ? `0${val}` : `${val}`

export const getIncreasedValueOrReset = (val: number, maxValue: number): number => {
  if (val > maxValue) {
    return 0
  }
  return val
}

export const checkHoursStep = (step: number, max: number): void => {
  if (step > max || step < 1) {
    throw Error('Hours step has to be in range 1-23')
  }
}

export const checkMinutesStep = (step: number, max: number): void => {
  if (step > max || step < 1) {
    throw Error('Minutes step has to be in range 1-59')
  }
}
