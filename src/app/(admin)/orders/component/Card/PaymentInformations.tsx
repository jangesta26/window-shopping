import React from 'react'
import { CreditCard } from 'lucide-react'
const PaymentInformations = () => {
  return (
    <div className="grid gap-3">
    <div className="font-semibold">Payment Information</div>
    <dl className="grid gap-3">
        <div className="flex items-center justify-between">
        <dt className="flex items-center gap-1 text-muted-foreground">
            <CreditCard className="h-4 w-4" />
            Visa
        </dt>
        <dd>**** **** **** 4532</dd>
        </div>
    </dl>
    </div>
  )
}

export default PaymentInformations
