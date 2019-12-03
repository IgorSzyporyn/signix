import React, { SVGProps, CSSProperties } from 'react'

export type WithSVGProps = SVGProps<SVGSVGElement>

const withSVGProps = (Component: React.ComponentType<WithSVGProps>) =>
  class WithSVGPropsHOC extends React.Component<WithSVGProps> {
    render() {
      const { props } = this
      const { rotate, style = {} } = props

      const newStyle: CSSProperties = {
        ...style,
        transition: 'transform 150ms ease-in-out'
      }

      if (rotate) {
        newStyle.transform = `rotate(${rotate}deg)`
      }

      return (
        <Component
          fill="currentColor"
          style={newStyle}
          {...(props as WithSVGProps)}
        />
      )
    }
  }

export default withSVGProps
