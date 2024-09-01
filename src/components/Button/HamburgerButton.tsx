import React from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const HamburgerButton = () => {
  return (
    <Button
    variant="outline"
    size="icon"
    className="shrink-0 md:hidden"
    >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
    </Button>
  )
}

export default HamburgerButton
