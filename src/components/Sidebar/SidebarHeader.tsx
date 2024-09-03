import React from 'react'
import { Boxes, Package2 } from 'lucide-react'
import Link from 'next/link'

const SidebarHeader = ( {title}:{title:string} ) => {
  return (
    <>
        <Link href="/" className="flex items-center gap-2 font-semibold hover:text-primary">
            <Boxes className="h-6 w-6" />
            <span className="">{title}</span>
        </Link>
    </>
  )
}

export default SidebarHeader
