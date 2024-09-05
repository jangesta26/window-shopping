import React from 'react'

const CustomerInformations = () => {
  return (
    <div className="grid gap-3">
        <div className="font-semibold">Customer Information</div>
        <dl className="grid gap-3">
            <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Customer</dt>
            <dd>Liam Johnson</dd>
            </div>
            <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Email</dt>
            <dd>
                <a href="mailto:">liam@acme.com</a>
            </dd>
            </div>
            <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Phone</dt>
            <dd>
                <a href="tel:">+1 234 567 890</a>
            </dd>
            </div>
        </dl>
    </div>
  )
}

export default CustomerInformations
