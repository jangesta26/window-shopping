import React from 'react';
import Categories from '@/utils/categories';
import CategoryItem from '@/components/Ecommerce/Products/CategoryItem';

const ClientPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 -mb-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 sm:mb-10">
          Categories
        </h2>

        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          {Categories.map((item) => (
            <div key={item.id} className="flex justify-center">
              <CategoryItem
                categoryId={item.id}
                categoryAlt={item.imageAlt}
                categoryImageSrc={item.imageSrc}
                categoryName={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
