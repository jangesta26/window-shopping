import React from 'react'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const SidebarHeader = ( {title}:{title:string} ) => {
  return (
    <>
        <Link href="/" className="flex items-center gap-2 font-semibold hover:text-primary">
            <ShoppingBag className="h-6 w-6" />
            <span>{title}</span>
        </Link>
    </>
  )
}

export default SidebarHeader
