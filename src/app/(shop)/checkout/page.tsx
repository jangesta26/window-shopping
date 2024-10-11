import React from 'react'
import DeliveryAddress from './component/DeliveryAddress'
import ProductOrdered from './component/ProductOrdered'
import ProgressBar from './component/ProgressBar'
import ShopVoucher from './component/ShopVoucher'
import PlaceOrder from './component/PlaceOrder'

const CheckoutPage = () => {
  return (
    <div className="mx-auto w-full py-8 antialiased dark:bg-gray-900 md:py-16 ">
      <ProgressBar />
      {/* Delivery Address */}
        <DeliveryAddress/>
      {/* Products Ordered */}
        <ProductOrdered />
      {/* Shop Voucher and Redeem */}
        <ShopVoucher />
      {/* Place Order */}
        <PlaceOrder />
      
    </div>
  )
}

export default CheckoutPage
