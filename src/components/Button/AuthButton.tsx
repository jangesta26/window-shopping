'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const AuthButton = (
  {
    label,
    path
  }:{
    label:string
    path:string
  }
) => {
  const router = useRouter();
  return (
    <Button
    onClick={()=>router.push(`${path}`)}
    >
      {label}
    </Button>
  )
}

export default AuthButton
