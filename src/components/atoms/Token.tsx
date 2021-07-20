import React, { memo } from 'react'

export const Token = memo(() => (
  <div className='token'>
    <h3>Token</h3>
    <p>Hello this is dummy component</p>
  </div>
))

Token.displayName = 'Token'
