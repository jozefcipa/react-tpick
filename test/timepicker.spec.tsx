import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { TimePicker } from '../src'

it('renders correctly', () => {
  const tree = renderer.create(<TimePicker hours={10} minutes={45} onChange={() => {}}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
