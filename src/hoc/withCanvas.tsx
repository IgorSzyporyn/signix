import React, { CSSProperties, MouseEvent } from 'react'
import updateActiveModelInAppStore from '../stores/appStore/updateActiveModelInAppStore'
import updateActiveTabInAppTabStore from '../stores/appTabStore/updateActiveTabInAppTabStore'
import ModelInterface from '../types/ModelInterface'

export interface WithCanvasProps {
  model: ModelInterface
  container: { width: number; height: number }
  className?: string
  forwardedRef?: React.MutableRefObject<HTMLDivElement | null>
  style?: CSSProperties
}

const withCanvas = <P extends object>(Component: React.ComponentType<P>) =>
  class WithCanvasHOC extends React.Component<P & WithCanvasProps> {
    render() {
      const { model, ...rest } = this.props

      return (
        <Component
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            updateActiveModelInAppStore(model.id)
          }}
          onDoubleClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            updateActiveTabInAppTabStore({ actionAreaActiveTab: 1 })
          }}
          hidden={model.hidden}
          model={model}
          {...(rest as P)}
        />
      )
    }
  }

export default withCanvas
