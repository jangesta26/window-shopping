import React from 'react'

const BadgeProduct = ({ title }: { title: string }) => {
  return (
    <span className={`w-[4.65rem] inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium ${title ? 'text-yellow-800 ring-1 ring-inset ring-yellow-600/20' : 'text-gray-400 ring-1 ring-inset ring-gray-300'}`}>
      {title || 'No Badge'}
    </span>
  )
}

export default BadgeProduct