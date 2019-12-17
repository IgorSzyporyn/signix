import React from 'react'
import ReactJson from 'react-json-view'

type JsonViewerProps = {
  json: object
}

const JsonViewer = ({ json }: JsonViewerProps) => {
  return (
    <ReactJson
      theme="summerfruit"
      iconStyle="square"
      enableClipboard={false}
      displayDataTypes={false}
      src={json}
      style={{
        backgroundColor: 'var(--dark)'
      }}
    />
  )
}

export default JsonViewer
