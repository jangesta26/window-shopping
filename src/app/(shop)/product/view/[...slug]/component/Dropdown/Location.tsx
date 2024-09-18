'use client'
import { MapPinned } from 'lucide-react';
import React, { useState } from 'react'

const Location = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(prevShow => !prevShow)
    }
  return (
    <div className="relative w-max mx-auto">
        <button 
        type="button" 
        onClick={handleShow}
        className="flex items-center px-0 py-0 gap-2 rounded text-white text-[12px] font-light hover:underline hover:text-green-400"
        >
            Location
        <MapPinned className='h-4 w-4'/>
        </button>
        { show && (
            <ul className="absolute block shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
                <li className="mb-2">
                <input placeholder="Search..." className="px-4 py-2.5 w-full rounded text-[#333] text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent" />
                </li>
                <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                <div className="flex items-center">
                    <img src="https://readymadeui.com/usa_flag.webp" className="w-6 mr-3" />
                    USA
                </div>
                </li>
                <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                <div className="flex items-center">
                    <img src="https://readymadeui.com/uk_flag.webp" className="w-6 mr-3" />
                    England
                </div>
                </li>
                <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                <div className="flex items-center">
                    <img src="https://readymadeui.com/india_flag.webp" className="w-6 mr-3" />
                    India
                </div>
                </li>
                <li className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                <div className="flex items-center">
                    <img src="https://readymadeui.com/singapore_flag.webp" className="w-6 mr-3" />
                    Singapore
                </div>
                </li>
            </ul>
            )

        }

    </div>

  )
}

export default Location
