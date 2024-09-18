import React from 'react'

const Title = (props:any) => {
  return (
    <div className="w-full p-2 border-b bg-gray-400/10">
        <h3 className="text-lg lg:text-xl font-semibold text-white">{props.title}</h3>
    </div>
  )
}

export default Title
