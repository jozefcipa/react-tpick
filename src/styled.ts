import styled from 'styled-components'
import upCaret from './assets/up-caret.svg'
import downCaret from './assets/down-caret.svg'

const Button = styled.span`
  align-self: stretch;
  background-repeat: no-repeat;
  background-size: 0.625rem;
  background-position: center;
  height: 0.625rem;
  cursor: pointer;
`

export const Container = styled.div`
  width: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 1.25rem;
  border: none;
  text-align: center;
  margin: .2rem .5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`

export const Switch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const UpButton = styled(Button)`
  background-image: url(${upCaret});
`

export const DownButton = styled(Button)`
  background-image: url(${downCaret});
`
