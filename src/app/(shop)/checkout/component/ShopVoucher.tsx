import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { CircleDollarSignIcon, Ticket } from 'lucide-react'
import Link from 'next/link'

const ShopVoucher = () => {
  return (
    <div className='mx-auto w-full flex-col items-center justify-center mt-4 bg-slate-100 divide-y divide-solid'>
      <div className='flex w-full items-center justify-between px-10 py-6'>
            <div className='flex items-center gap-2'>
                <Ticket className='text-yellow-600'/>
                <span className='font-light'>Shop Voucher</span>
            </div>
            <Link href='#' className='font-semibold text-primary hover:underline'>
             Select Voucher
            </Link>
      </div>
        <div className="flex flex-col sm:flex-row w-full items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                <CircleDollarSignIcon className="text-yellow-600" />
                <span className="font-light text-xs sm:text-sm">Shop Coins</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-light">
                Coins cannot be redeemed
                </span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 mt-2 sm:mt-0">
                <p className="text-xs sm:text-sm">[-₱0]</p>
                <Checkbox id="terms" className="rounded-[2px]" />
        </div>
        </div>
    </div>
  )
}

export default ShopVoucher
