import React, { PureComponent } from 'react'
import { Frame } from 'chrome-sidebar'
import { url } from './constants'

export default function App () {
  return (
    <Frame
      url={url}
      onMount={this.frameMount}
    />
  )
}