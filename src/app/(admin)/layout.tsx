import DefaultLayout from '@/components/Layout/DefaultLayout'
import React,{ FC, ReactNode } from 'react'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout: FC<AdminLayoutProps> = ({children}) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

export default AdminLayout
