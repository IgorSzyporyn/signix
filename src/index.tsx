import React from 'react'
import ReactDOM from 'react-dom'
import './baseline.scss'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import TextModel from './models/TextModel'

ReactDOM.render(
  <App
    model={{
      type: 'background',
      color: {
        background: '#FFF',
        foreground: '#000'
      },
      dimension: {
        height: 160,
        width: 800
      },
      items: [{ ...TextModel, value: 'Here some text' }]
    }}
  />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
