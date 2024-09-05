import React from 'react'

const ShippingInformations = () => {
  return (
    <div className="grid gap-3">
        <div className="font-semibold">Shipping Information</div>
        <address className="grid gap-0.5 not-italic text-muted-foreground">
        <span>Liam Johnson</span>
        <span>1234 Main St.</span>
        <span>Anytown, CA 12345</span>
    </address>
</div>
  )
}

export default ShippingInformations
