import React from 'react'
interface OrdersProps {
    children: React.ReactNode;
  }

const Orders: React.FC<OrdersProps> = ({ children }) => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      {children}
    </main>
  )
}

export default Orders
