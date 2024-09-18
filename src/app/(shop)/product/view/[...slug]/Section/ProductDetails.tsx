import React from 'react'

interface ProductDetailsProps {
    children: React.ReactNode;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({children}) => {
  return (
    <section className='flex gap-4 mt-8 w-full'>
        {children}
    </section>
  )
}

export default ProductDetails
