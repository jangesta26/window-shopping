import DefaultAuthLayout from '@/components/Layout/DefaultAuthLayout'
import React,{ FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <DefaultAuthLayout>
        {children}
    </DefaultAuthLayout>

  )
}

export default AuthLayout
