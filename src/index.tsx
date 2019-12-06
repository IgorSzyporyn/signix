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
      items: [
        {
          type: 'text',
          position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
          dimension: { disabled: false, width: 0, height: 0 },
          color: { foreground: '#000', background: 'transparent' },
          value: 'Here some text',
          items: [],
          group: false,
          id: '_1fnk2m8xp',
          name: 'Clan Name',
          parentId: '_fwj5jm4rz',
          level: 1
        },
        {
          type: 'group',
          position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
          dimension: { disabled: false, width: 250, height: 250 },
          color: { background: 'transparent', foreground: 'transparent' },
          value: '',
          items: [
            {
              type: 'image',
              position: {
                type: 'top-left',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              },
              dimension: { disabled: false, width: 48, height: 48 },
              color: { background: 'transparent', foreground: 'transparent' },
              value: '',
              items: [],
              group: false,
              id: '_iwp6abvsl',
              name: 'image-_iwp6abvsl',
              parentId: '_tzrjplokp',
              level: 2
            },
            {
              type: 'text',
              position: {
                type: 'top-left',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              },
              dimension: { disabled: false, width: 0, height: 0 },
              color: { foreground: '#000', background: 'transparent' },
              value: '',
              items: [],
              group: false,
              id: '_7ccxqjddm',
              name: 'text-_7ccxqjddm',
              parentId: '_tzrjplokp',
              level: 2
            },
            {
              type: 'group',
              position: {
                type: 'top-left',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              },
              dimension: { disabled: false, width: 250, height: 250 },
              color: { background: 'transparent', foreground: 'transparent' },
              value: '',
              items: [
                {
                  type: 'text',
                  position: {
                    type: 'top-left',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                  },
                  dimension: { disabled: false, width: 0, height: 0 },
                  color: { foreground: '#000', background: 'transparent' },
                  value: '',
                  items: [],
                  group: false,
                  id: '_bgbl8fsjc',
                  name: 'text-_bgbl8fsjc',
                  parentId: '_sxxh4961h',
                  level: 3
                },
                {
                  type: 'text',
                  position: {
                    type: 'top-left',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                  },
                  dimension: { disabled: false, width: 0, height: 0 },
                  color: { foreground: '#000', background: 'transparent' },
                  value: '',
                  items: [],
                  group: false,
                  id: '_834d9p35d',
                  name: 'text-_834d9p35d',
                  parentId: '_sxxh4961h',
                  level: 3
                },
                {
                  type: 'image',
                  position: {
                    type: 'top-left',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                  },
                  dimension: { disabled: false, width: 48, height: 48 },
                  color: {
                    background: 'transparent',
                    foreground: 'transparent'
                  },
                  value: '',
                  items: [],
                  group: false,
                  id: '_xjwjbynxl',
                  name: 'image-_xjwjbynxl',
                  parentId: '_sxxh4961h',
                  level: 3
                }
              ],
              group: true,
              id: '_sxxh4961h',
              name: 'group-_sxxh4961h',
              parentId: '_tzrjplokp',
              level: 2
            }
          ],
          group: true,
          id: '_tzrjplokp',
          name: 'group-_tzrjplokp',
          parentId: '_fwj5jm4rz',
          level: 1
        },
        {
          type: 'text',
          position: { type: 'top-left', top: 0, left: 0, bottom: 0, right: 0 },
          dimension: { disabled: false, width: 0, height: 0 },
          color: { foreground: '#000', background: 'transparent' },
          value: '',
          items: [],
          group: false,
          id: '_4qsxky0nk',
          name: 'text-_4qsxky0nk',
          parentId: '_fwj5jm4rz',
          level: 1
        }
      ],
      group: true,
      id: '_fwj5jm4rz',
      name: 'Background1',
      level: 0
    }}
  />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
