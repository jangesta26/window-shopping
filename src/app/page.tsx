'use client'
import React, { useEffect, useState } from 'react';
import Header from "@/components/Navbar/Client";
import HeaderItem from '@/components/Navbar/Client/HeaderItem';
import BrandSmall from '@/components/Common/BrandSmall';
import SearchItem from '@/components/Input/SearchItem';
import ButtonCart from '@/components/Button/ButtonCart';
import Footer from '@/components/Footer';
import Loader from '@/components/Common/Loader';
import ProductItem from '@/components/Ecommerce/Products/ProductItem';
import Categories from '@/utils/categories';
import Promo from '@/components/Ecommerce/Promos/Promo';

const HomePage: React.FC = () => {
  
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
        <Header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-0.5">
            <HeaderItem />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-2 px-4 sm:px-6 md:px-8">
            {/* Brand component */}
              <BrandSmall />
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <div className="flex items-center gap-2">
                <SearchItem />
                <ButtonCart />
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Promo />
      <div className="bg-white dark:bg-gray-900 -mb-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center sm:text-center md:text-center xl:text-left text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 sm:mb-10">
           Categories
        </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
              Categories.map((item)=>(
                <ProductItem
                catogoryId={item.id}
                catogoryAlt={item.imageAlt}
                catogoryimageSrc={item.imageSrc}
                catogoryName={item.name}
                />
              ))
            }
          </div>
        </div>
      </div>
      <Footer/>
      </>
      )
    }
  </>
  );
};

export default HomePage;
