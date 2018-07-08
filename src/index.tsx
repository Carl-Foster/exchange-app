import { Container } from 'bloomer'
import 'bulma'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(
  <Container><App /></Container>,
  document.querySelector('#root'),
)
