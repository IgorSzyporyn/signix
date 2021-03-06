import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './baseline.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import AppApiProps from './types/AppApiProps'
import ModelInterface from './types/ModelInterface'
import UserInterface from './types/UserInterface'

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
      enabled: true,
      url: 'http://localhost:8000/mock/model'
    }
  },
  data: {
    data: { name: 'Splynx', rank: 1, quality: 'good' },
    dataKeys: ['name', 'rank', 'quality'],
    dataTested: true,
    dataValid: true,
    model: { rank: [0, 1, 2, 3, 4, 5], quality: ['good', 'poor'] },
    modelTested: true,
    modelValid: true,
    tested: true,
    valid: true,
    validating: true
  }
}

const modelExample: ModelInterface = {
  type: 'background',
  coreType: 'core',
  position: { type: 'top-left', x: 0, y: 0 },
  dimension: { disabled: false, width: 640, height: 130 },
  color: { background: 'rgba(0, 0, 0, 0)', foreground: 'rgba(0, 0, 0, 0)' },
  font: { size: 24, type: 'Arial' },
  items: [
    {
      type: 'textstaticquery',
      coreType: 'text',
      position: { type: 'top-left', x: 0, y: 0 },
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
      api: true,
      id: '_0j7wbjxks',
      name: 'Rank from API',
      parentId: '_du2rlpvee',
      level: 1
    },
    {
      type: 'textoptions',
      coreType: 'text',
      position: { type: 'top-left', x: 0, y: 0 },
      dimension: { disabled: false, width: 0, height: 0 },
      color: { foreground: '#000', background: 'rgba(255, 255, 255, 0)' },
      font: { size: 24, type: 'Arial' },
      items: [],
      enumeration: [],
      background: { disabled: true, image: '', position: 'center' },
      options: [
        { question: 'question no 1', value: 'some value', default: false },
        { question: 'question no 2', value: 'some other value', default: true }
      ],
      value: '',
      id: '_39pg56zgc',
      name: 'List of texts',
      parentId: '_du2rlpvee',
      level: 1
    },
    {
      type: 'imagestatic',
      coreType: 'image',
      position: { type: 'top-left', x: 32, y: 32 },
      dimension: { disabled: false, width: 64, height: 64 },
      color: { background: 'rgba(0, 0, 0, 0)', foreground: 'rgba(0, 0, 0, 0)' },
      font: { size: 24, type: 'Arial' },
      items: [],
      enumeration: [],
      background: { disabled: true, image: '', position: 'center' },
      options: [],
      value: 'flags/flag_albania.png',
      id: '_4xxx99qv3',
      name: 'Flag',
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

const userExample: UserInterface = {
  id: 'jdhhsi8978734hjss'
}

ReactDOM.render(
  <App user={userExample} api={apiExample} model={modelExample} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
