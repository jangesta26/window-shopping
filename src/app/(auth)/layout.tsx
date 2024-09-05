'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import DefaultAuthLayout from '@/components/Layout/DefaultAuthLayout';
import Loader from '@/components/Common/Loader'; 

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <DefaultAuthLayout>
          {children}
        </DefaultAuthLayout>
      )}
    </>
  );
};

export default AuthLayout;
