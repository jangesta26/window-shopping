import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

const ButtonCart = () => {
  return (
    <div className="w-18 h-10 flex items-center justify-center gap-2">
    <Button
      className='bg-primary hover:bg-primary/90 dark:hover:bg-primary px-2 rounded-full items-center'
    >
      <ShoppingCart className='h-4'/>
    </Button>
  
  </div>
  )
}

export default ButtonCart
