import Link from 'next/link'
import React from 'react'

const PaymentMethods = () => {
  return (
    <div className="lg:text-left col-span-full md:col-span-1 lg:w-max">
        <div className="flex justify-between items-center mb-7 max-w-sm mx-auto">
            <h4 className="text-lg text-gray-200 hover:text-gray-200 font-medium ">Payment Methods</h4>
            <Link href="#" className="flex items-center gap-2 text-xs text-indigo-600 font-semibold">Visit All<svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L11.6667 5M8.33333 9L11.8619 5.4714C12.0842 5.24918 12.1953 5.13807 12.1953 5C12.1953 4.86193 12.0842 4.75082 11.8619 4.5286L8.33333 1" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </Link>
        </div>
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto ">
            <div className="block h-14">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYiqOWFjDw1g_01uS4Bue3IQooKknNe-NW49L5mrilSXBDvjLM1ORkTsLvQ1_lBH_cuk&usqp=CAU" alt="Footer tailwind section" className="max-lg:w-full rounded-md h-14" />
            </div>
            <div className="block h-14">
                <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" alt="Footer tailwind section" className="max-lg:w-full rounded-md h-14" />
            </div>
            <div className="block h-14 bg-white rounded-md">
                <img src="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1990-1996.png" alt="Footer tailwind section" className="max-lg:w-full py-1 px-2 h-14" />
            </div>
            <div className="block h-14 bg-white rounded-md">
                <img src="https://1000logos.net/wp-content/uploads/2023/05/GCash-Logo.png" alt="Footer tailwind section" className="max-lg:w-full h-14" />
            </div>
            <div className="block h-14 bg-white rounded-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PayMaya_Logo.png/1200px-PayMaya_Logo.png" alt="Footer tailwind section" className="max-lg:w-full py-1 px-1 h-14" />
            </div>
            <div className="block  h-14 bg-white rounded-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/1280px-Amazon_Pay_logo.svg.png" alt="Footer tailwind section" className="max-lg:w-full py-4 px-2 h-14" />
            </div>
        </div>
    </div>
  )
}

export default PaymentMethods
