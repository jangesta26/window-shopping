'use client'
import NotFound404 from '@/components/Common/NotFound.tsx/404';
import DefaultLayout from '@/components/Layout/DefaultLayout'
import { useAuth } from '@/providers/AuthContext';
import React,{ FC, ReactNode } from 'react'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({children}) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
    {
      !isAuthenticated 
      ? <NotFound404 />
      : 
      <DefaultLayout>
        {children}
      </DefaultLayout>
    }
    </>
  )
}

export default AdminLayout
