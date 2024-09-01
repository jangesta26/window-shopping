import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
    <>
    <div className="gap-8 mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
        <div className="text-sm text-center text-white">
            ©
            <Link 
            rel="noopener" 
            href="#"
            className='hover:text-blue-500'
            > Winshopee
            </Link>
            {" "}
             2024 . All rights reserved.
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                <li><a href="javascript:;" className="text-sm text-gray-500">Terms</a></li>
                <li><a href="javascript:;" className="text-sm text-gray-500">Privacy</a></li>
                <li><a href="javascript:;" className="text-sm text-gray-500">Cookies</a></li>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Copyright
