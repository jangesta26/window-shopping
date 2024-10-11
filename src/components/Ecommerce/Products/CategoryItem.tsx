import capitalizeWords from '@/utils/capitalize';
import Categories from '@/utils/categories';
import slugify from '@/utils/slugify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryItem = (
  {
    categoryId,
    categoryAlt,
    categoryImageSrc,
    categoryName,
  }: {
    categoryId?: number;
    categoryAlt?: string;
    categoryImageSrc?: string;
    categoryName?: string;
  }
) => {
  const categoryNameSafe = categoryName || '';
  const slug = slugify(categoryNameSafe);
  const decodedCategory = typeof categoryNameSafe === 'string' ? categoryNameSafe.replace(/-/g, ' ') : '';
  const displayCategoryName = getDisplayCategory(decodedCategory);
  const slugifiedCategory = slugify(displayCategoryName);
  const category = Categories.find(c => slugify(c.name) === slugifiedCategory);

  const displayCategoryNameForDisplay = category ? capitalizeWords(category.name) : capitalizeWords(displayCategoryName);

  return (
    <Link key={categoryId} href={`/product/${slug}`} className="group">
      <div className="mx-auto w-full max-w-[250px] h-[280px] overflow-hidden rounded-lg shadow-md border-black bg-slate-50 dark:bg-gray-700/5 flex flex-col p-2 py-2">
        <Image
          alt={categoryAlt || 'Category image'}
          src={categoryImageSrc || ''}
          className="px-auto object-cover object-center group-hover:opacity-75 h-2/2"
          width={300}
          height={200} 
        />
        <h3 className="-mt-2 flex-1 p-2 text-sm sm:text-base md:text-lg lg:text-md xl:text-lg text-center text-gray-700 dark:text-white first-letter:uppercase">
          {displayCategoryNameForDisplay}
        </h3>
      </div>
    </Link>
  );
}

const getDisplayCategory = (category: string): string => {
  if (category.toLowerCase() === 'men apparel') return "Men's Apparel";
  if (category.toLowerCase() === 'women apparel') return "Women's Apparel";
  return category;
};

export default CategoryItem;
