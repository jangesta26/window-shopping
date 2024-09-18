'use client'
import NotFound404 from '@/components/Common/NotFound.tsx/404';
import DefaultLayout from '@/components/Layout/DefaultLayout'
import { useAuth } from '@/providers/AuthContext';
import { SidebarProvider } from '@/providers/SidebarProvider';
import React,{ FC, ReactNode } from 'react'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({children}) => {
  const { isAuthenticated, userRole } = useAuth();
  return (
    <>
    {
      !isAuthenticated || userRole ==="buyer"
      ? <NotFound404 />
      : 
      <SidebarProvider>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </SidebarProvider>
    }
    </>
  )
}

export default AdminLayout
