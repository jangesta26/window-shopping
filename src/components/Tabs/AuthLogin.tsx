'use client'
import React from 'react'
import { Tabs } from "@/components/ui/tabs"

interface AuthLoginLayoutProps {
  children: React.ReactNode;
}

const AuthLoginLayout: React.FC<AuthLoginLayoutProps> = ({children}) => {
  return (
    <Tabs defaultValue="email" className="w-[400px]">
      {children}
    </Tabs>
  )
}

export default AuthLoginLayout
