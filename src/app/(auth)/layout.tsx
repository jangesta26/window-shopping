'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import DefaultAuthLayout from '@/components/Layout/DefaultAuthLayout';
import Loader from '@/components/Common/Loader'; 
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        pathname === '/seller/signup' 
        ? 
        <>
          {children}
        </>
        :
        <DefaultAuthLayout>
          {children}
        </DefaultAuthLayout>
      )}
    </>
  );
};

export default AuthLayout;
