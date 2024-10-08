import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CartItems from './component/CartItems'
import { items } from '@/utils/cartItems'
import OrderSummary from './component/OrderSummary'
import PeopleAlsoBought from './component/PeopleAlsoBought'
import { peopleAlsoBoughtItems } from '@/utils/peopleAlsoBought'

const CartPage = () => {
  return (
    <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    {/* Cart Items */}
                    <CartItems cartDataItems={items}/>
                     {/* People also bought */}
                    <PeopleAlsoBought alsoBoughtItems={peopleAlsoBoughtItems}/>
                </div>

            {/* Order summary */}
            <OrderSummary />
            </div>
        </div>
    </div>
  )
}

export default CartPage
