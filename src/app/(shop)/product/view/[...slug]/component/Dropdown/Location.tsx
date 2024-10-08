'use client'
import { MapPinned } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Location = ({country}:{country:any}) => {
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
            { country.map((item:any)=>(
                <li key={item.id} className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer">
                <div className="flex items-center">
                    <Image 
                    src={item.imgSrc}
                    className="w-6 mr-3"
                    alt={item.imgAlt}
                    width={300}
                    height={300}
                    />
                    {item.title}
                </div>
                </li>
            ))}

            </ul>
            )
        }

    </div>

  )
}

export default Location
