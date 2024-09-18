'use client'
import React from 'react'

const Overview = (
  {
    children
  }:{
    children: React.ReactNode;
  }
) => {
  return (
    <div className="bg-gray-700 mt-1.5">
      <div className="p-4 lg:p-10 lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
          {
            children
          }
        </div>
      </div>
    </div>
  )
}

export default Overview
