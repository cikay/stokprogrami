import React from 'react'

export default function withProvider(Component: React.FC, Provider: React.FC) {
  return () => (
    <Provider>
      <Component />
    </Provider>
  )
}
