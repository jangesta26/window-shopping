import React from 'react'

const ProgressBar = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto -mt-4">
        <div className="flex justify-between items-start text-center gap-2">
            <div className="flex flex-col justify-center items-center">
            <div className="bg-[#232A70] w-6 h-6 text-white font-bold text-sm rounded-full flex items-center justify-center">1</div>
            <p className="text-[#232A70] text-sm mt-1.5 font-semibold">Cart</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="bg-[#232A70] w-6 h-6 text-white font-bold text-sm rounded-full flex items-center justify-center">2</div>
            <p className="text-[#232A70] text-sm mt-1.5 font-semibold">Order Summary</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="bg-[#232A70] w-6 h-6 text-white font-bold text-sm rounded-full flex items-center justify-center">3</div>
            <p className="text-[#232A70] text-sm mt-1.5 font-semibold">Checkout</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-300 w-6 h-6 text-white font-bold text-sm rounded-full flex items-center justify-center">4</div>
            <p className="text-gray-300 text-sm mt-1.5">Payment</p>
            </div>
        </div>
        <div className="bg-gray-300 rounded-full w-full h-2.5 mt-2">
            <div className="w-3/4 h-full rounded-full bg-[#232A70] shadow-md flex items-center relative transition-all duration-300">
            <span className="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full" />
            </div>
        </div>
    </div>

  )
}

export default ProgressBar
