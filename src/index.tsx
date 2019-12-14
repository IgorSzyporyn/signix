import React from 'react'
import ReactDOM from 'react-dom'
import './baseline.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import AppApiProps from './types/AppApiProps'

const apiExample: AppApiProps = {
  query: {
    enabled: true,
    data: {
      url: 'http://localhost:8000/mock/data',
      dynamic: true,
      dynamicKey: 'token',
      dynamicTestKey: '1'
    },
    model: {
      url: 'http://localhost:8000/mock/model'
    }
  },
  data: {
    data: { name: 'Splynx', rank: 1, quality: 'good' },
    model: { rank: [0, 1, 2, 3, 4, 5], quality: ['good', 'poor'] },
    dataKeys: ['name', 'rank', 'quality']
  }
}

ReactDOM.render(<App api={apiExample} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
