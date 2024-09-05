import { Card } from '@/components/ui/card';
import React from 'react'

interface OrdersCardLayoutProps{
    children: React.ReactNode;
}
const BillingStatement: React.FC<OrdersCardLayoutProps> = ({children}) => {
  return (
    <Card
    className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
    >
    {children}
    </Card>
  )
}

export default BillingStatement
