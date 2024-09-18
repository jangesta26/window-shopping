'use client'
import React, { useState } from 'react';
import Breadcrumbs from './component/Breadcrumbs';
import Overview from './component/Ecommerce/Overview/Product/Overview';
import ObjectCover from './component/Card/ObjectCover';
import ObjectContain from './component/Carousel/ObjectContain';
import ProductRatings from './component/Ecommerce/Rating/ProductRatings';
import Price from './component/Ecommerce/Overview/Product/Price';
import Details from './component/Ecommerce/Overview/Product/Details';
import ProductForm from './component/Form/ProductForm';
import StoreRatings from './component/Ecommerce/Rating/StoreRatings';
import Specifications from './Section/Specification';
import ProductSpecifications from './Section/ProductDetails';
import TopPicksProduct from './Section/TopPicksProduct';
import Description from './Section/Description';
import CustomerViewAlso from './Section/CustomerViewAlso';

const ViewPage = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const defaultImage = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";

  return (
    <div className='mx-auto w-full mt-8'>
      <Breadcrumbs
        breadcrumbsItem={[
          { 
            id:1,
            title:'Winshopee',
            category: `Men's Apparel`,
            item: 'T-shirt'
          }
        ]}
      />
      <Overview>
        <div className="lg:col-span-3 text-center">
          
            <ObjectCover
              imageSrc={selectedImage}
              defaultImageSrc={defaultImage}
            />
  
            <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
              <ObjectContain
              onImageClick={handleImageClick}
              />
            </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">Espresso Elegante | Coffee</h2>
          <ProductRatings />
          <Price />
          <Details />
          <ProductForm 
            onImageClick={handleImageClick}
          />
        </div>
      </Overview>

      <StoreRatings />

      <ProductSpecifications>
        <div className='flex-grow bg-gray-700 p-4'>
          <Specifications
            title="Product Specifications"
            />

          <Description 
            title="Product Description"
          />
        </div>

        <TopPicksProduct 
          title="Top Picks from Shop"
        />
      </ProductSpecifications>

      <CustomerViewAlso />

    </div>
  );
};

export default ViewPage;
