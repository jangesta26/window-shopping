'use client'
import React, { useEffect, useState } from 'react';

import Loader from '@/components/Common/Loader';
import DefaultClientLayout from '@/components/Layout/DefaultClientLayout';

interface DefaultBuyerLayout {
  children: React.ReactNode;
}


const HomePage: React.FC<DefaultBuyerLayout> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {
      loading 
      ? (<Loader /> 
      ):( 
        <>

        <DefaultClientLayout>
        {
          children
        }
        </DefaultClientLayout>
      </>
      )
    }
  </>
  );
};

export default HomePage;
