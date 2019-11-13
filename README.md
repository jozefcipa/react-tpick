# react-tpick

[![Actions Status](https://github.com/jozefcipa/react-tpick/workflows/CI%2FCD/badge.svg)](https://github.com/jozefcipa/react-tpick/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/react-tpick.png?compact=true)](https://nodei.co/npm/react-tpick/)

A dead simple time picker component for React

![](https://media.giphy.com/media/Q8InvH596iMt9pIqKU/giphy.gif)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-tpick --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add react-tpick
```

>This package requires `react` and `styled-components` installed

## Example

```js
import React from 'react'
import { TimePicker } from 'react-tpick'

const TimePickerDemo = () => {
  const [time, setTime] = React.useState({ hours: 10, minutes: 45 })

  return (
    <TimePicker
      hours={time.hours}
      minutes={time.minutes}
      onChange={({ hours, minutes }) => {
        console.log(`New time is ${hours}:${minutes}`)
        setTime({ hours, minutes })
      }}
    />
  )
}
```

## Properties
| Name | Type | Description | Required |
|---|---|---|---|
| `hours` | `Number` (0-23) | Specifies hours | Yes |
| `minutes` | `Number` (0-59) | Specifies minutes | Yes |
| `onChange` | `({ hours, minutes }) => void` | Time change handler function | Yes |
| `hoursStep` | `Number` (1-23) | Specifies hours step. Default is 1 | No |
| `minutesStep` | `Number` (1-59) | Specifies minutes step. Default is 1 | No |
