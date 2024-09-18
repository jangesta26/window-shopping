import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  via-gray-700 to-gray-900 font-sans tracking-wide bg">
        <div className="p-12">
            <p className="text-center text-gray-300 text-sm">
                © {" "}
                <Link href='/' className='hover:text-primary cursor-pointer hover:underline font-semibold'>Winshopee</Link>
                {" "}
                | 2024. All rights reserved.</p>
        </div>
    </footer>

  )
}

export default Footer
