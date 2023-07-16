
import React from 'react'

export const Alert = ({children}) => {
  return (
    <div className="mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-red-700 border border-red-500" role="alert">
      {children}
</div>
  )
}

