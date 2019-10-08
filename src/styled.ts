import styled from 'styled-components'

// import * as upCaret from './assets/up-caret.svg'
// import * as downCaret from './assets/up-caret.svg'

export const Container = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 20px;
  border: none;
  text-align: center;
  margin: .5rem;
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

const Button = styled.span`
  align-self: stretch;
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center;
  height: 10px;
  cursor: pointer;
`

export const UpButton = styled(Button)`
    background-image: url(${'upCaret'});    
`

export const DownButton = styled(Button)`
    background-image: url(${'downCaret'}); 
`
