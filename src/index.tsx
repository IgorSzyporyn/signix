import React from 'react'
import ReactDOM from 'react-dom'
import './baseline.scss'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App
    model={{
      type: 'background',
      position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
      dimension: { disabled: false, width: 800, height: 160 },
      color: { background: '#FFF000', foreground: '#000' },
      value: '',
      id: '_fwj5jm4rz',
      name: 'Background1',
      items: [
        {
          type: 'text',
          position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
          dimension: { disabled: false, width: 0, height: 0 },
          color: { foreground: '#000', background: 'transparent' },
          value: 'Here some text',
          id: '_1fnk2m8xp',
          name: 'Clan Name',
          parentId: '_fwj5jm4rz'
        }
      ]
    }}
  />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
