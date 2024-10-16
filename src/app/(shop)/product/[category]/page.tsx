'use client';
import React, { useState } from 'react';
import ProductItem from './component/Card/ProductItem';
import products from '@/utils/product';
import slugify from '@/utils/slugify';
import Categories from '@/utils/categories';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { Pagination } from "@nextui-org/pagination";

const ProductListPage = ({ params }: { params: { category: string } }) => {
  const decodedCategory = typeof params.category === 'string' ? params.category.replace(/-/g, ' ') : '';
  const displayCategoryName = getDisplayCategory(decodedCategory);
  const slugifiedCategory = slugify(displayCategoryName);
  const category = Categories.find(c => slugify(c.name) === slugifiedCategory);
  const displayCategoryNameForDisplay = category ? category.name : displayCategoryName;

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(product => slugify(product.categoryName) === slugifiedCategory);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 uppercase">
          {displayCategoryNameForDisplay}
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 xl:gap-y-10">
            {filteredProducts.map(product => (
              <Link key={product.id} href={`/product/view/${params.category}/${product.id}`}>
                <ProductItem 
                  productImageAlt={product.imageAlt}
                  productImageSrc={product.imageSrc}
                  productHref={product.href}
                  productName={product.title}
                  productPrice={product.price}
                  productSold={product.sold}
                  productStar={product.star}
                  productBadge={product.badge}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex w-full mt-10 mx-auto items-center justify-center'>
            <p className='text-center text-xl'>No items available</p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-small text-default-500">Selected Page: {currentPage}</p>
        <Pagination
          variant='bordered'
          total={50}
          color="success"
          page={currentPage}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="flat"
            color="default"
            className='hover:bg-primary/90 hover:text-white'
            onPress={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="default"
            className='hover:bg-primary/90 hover:text-white'
            onPress={() => setCurrentPage(prev => (prev < 10 ? prev + 1 : prev))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const getDisplayCategory = (category: string): string => {
  if (category.toLowerCase() === 'men apparel') return "Men's Apparel";
  if (category.toLowerCase() === 'women apparel') return "Women's Apparel";
  return category;
};

export default ProductListPage;
