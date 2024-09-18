import React from 'react'

const Price = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
        <p className="text-2xl lg:text-4xl font-semibold text-white">$12</p>
        <p className="text-gray-400 text-sm lg:text-base line-through">$16
          <span className="text-xs lg:text-sm ml-1">Tax included</span>
        </p>
    </div>
  )
}

export default Price
