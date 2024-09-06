import React from 'react'
import ProductItem from './component/Card/ProductItem'
import products from '@/utils/product'
import slugify from '@/utils/slugify';
import Categories from '@/utils/categories';
const ProductListPage = ({params}:{ params: { category: string } }) => {
  const decodedCategory = typeof params.category === 'string' ? params.category.replace(/-/g, ' ') : '';
  const displayCategoryName = getDisplayCategory(decodedCategory);
  const slugifiedCategory = slugify(displayCategoryName);
  const category = Categories.find(c => slugify(c.name) === slugifiedCategory);
  const displayCategoryNameForDisplay = category ? category.name : displayCategoryName;
  
  return (
  <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
        {displayCategoryNameForDisplay}
          </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products
            .filter(product => slugify(product.categoryName) === slugifiedCategory)
            .map((product) => (
              <ProductItem 
              key={product.id}
              productId={product.id}
              productImageAlt={product.imageAlt}
              productImageSrc={product.imageSrc}
              productHref={product.href}
              productName={product.name}
              productColor={product.color}
              productPrice={product.price}
              productSold={product.sold}
              productStar={product.star}
              productBadge={product.badge}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

const getDisplayCategory = (category: string): string => {
  if (category.toLowerCase() === 'men apparel') return "Men's Apparel";
  if (category.toLowerCase() === 'women apparel') return "Women's Apparel";
  return category;
};

export default ProductListPage
