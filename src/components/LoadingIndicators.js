import React from 'react'
import { css } from '@emotion/core'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'


const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

const LoadingIndicators = () =>  {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <BounceLoader css={loaderCSS} size={48} color='orange' loading />
      <BarLoader css={loaderCSS} size={48} color='orange' loading />
      <BeatLoader css={loaderCSS} size={48} color='orange' loading />
    </div>
  )
}

export default LoadingIndicators
