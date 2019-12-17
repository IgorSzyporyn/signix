import React from 'react'
import ReactDOM from 'react-dom'
import './baseline.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import AppApiProps from './types/AppApiProps'
import ModelInterface from './types/ModelInterface'

const apiExample: AppApiProps = {
  query: {
    enabled: true,
    dataQuery: {
      url: 'http://localhost:8000/mock/data',
      dynamic: true,
      dynamicKey: 'token',
      dynamicTestKey: '1'
    },
    modelQuery: {
      url: 'http://localhost:8000/mock/model'
    }
  },
  data: {
    data: { name: 'Splynx', rank: 1, quality: 'good' },
    model: { rank: [0, 1, 2, 3, 4, 5], quality: ['good', 'poor'] },
    dataKeys: ['name', 'rank', 'quality']
  }
}

const modelExample: ModelInterface = {
  type: 'background',
  position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
  dimension: { disabled: false, width: 640, height: 130 },
  color: { background: 'rgba(0, 0, 0, 0)', foreground: 'rgba(0, 0, 0, 0)' },
  font: { size: 24, type: 'Arial' },
  items: [
    {
      type: 'textstaticquery',
      position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
      dimension: { disabled: false, width: 0, height: 0 },
      color: { foreground: '#000', background: 'rgba(255, 255, 255, 0)' },
      font: { size: 24, type: 'Arial' },
      items: [],
      enumeration: [
        { type: 'text', key: 0, value: '' },
        { type: 'text', key: 1, value: '' },
        { type: 'text', key: 2, value: '' },
        { type: 'text', key: 3, value: '' },
        { type: 'text', key: 4, value: '' },
        { type: 'text', key: 5, value: '' }
      ],
      background: { disabled: true, image: '', position: 'center' },
      options: [],
      value: 'rank',
      id: '_0j7wbjxks',
      name: 'textstaticquery-_0j7wbjxks',
      parentId: '_du2rlpvee',
      level: 1
    }
  ],
  enumeration: [],
  background: { disabled: true, image: '', position: 'center' },
  options: [],
  value: '',
  group: true,
  name: 'Background',
  id: '_du2rlpvee',
  level: 0
}

ReactDOM.render(
  <App api={apiExample} model={modelExample} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
