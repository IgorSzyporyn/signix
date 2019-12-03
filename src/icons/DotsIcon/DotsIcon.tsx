import React from 'react'
import withSVGProps, { WithSVGProps } from '../../hoc/withSVGProps'

const DotsIcon = (props: WithSVGProps) => (
  <svg version="1.1" viewBox="0 0 60 60" {...props}>
    <g>
      <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z" />
      <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z" />
      <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" />
    </g>
  </svg>
)

export default withSVGProps(DotsIcon)
