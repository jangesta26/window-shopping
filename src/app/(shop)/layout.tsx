'use client'
import React, { useEffect, useState } from 'react';
import Loader from '@/components/Common/Loader';
import Footer from '@/components/Footer';
import Header from '@/components/Navbar/Client';
import Feature from '@/components/Ecommerce/Feature/Feature';
import { usePathname } from 'next/navigation';

interface DefaultBuyerLayout {
  children: React.ReactNode;
}


const HomePage: React.FC<DefaultBuyerLayout> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

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
        <Header />
        {
          pathname === '/' && <Feature />
        }
        <div className='px-4 md:px-6 lg:px-8 xl:px-72'>
          {
            children
          }
        </div>
        <Footer/>
       
      </>
      )
    }
  </>
  );
};

export default HomePage;
