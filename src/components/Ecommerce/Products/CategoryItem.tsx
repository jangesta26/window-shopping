import capitalizeWords from '@/utils/capitalize'
import Categories from '@/utils/categories'
import slugify from '@/utils/slugify'
import Link from 'next/link'
import React from 'react'

const CategoryItem = (
  {
    categoryId,
    categoryAlt,
    categoryImageSrc,
    categoryName,

  }:{
    categoryId?:number
    categoryAlt?:string
    categoryImageSrc?:string
    categoryName?:string

  }) => {
    const categoryNameSafe = categoryName || '';
    const slug = slugify(categoryNameSafe);
    const decodedCategory = typeof categoryNameSafe === 'string' ? categoryNameSafe.replace(/-/g, ' ') : '';
    const displayCategoryName = getDisplayCategory(decodedCategory);
    const slugifiedCategory = slugify(displayCategoryName);
    const category = Categories.find(c => slugify(c.name) === slugifiedCategory);
  
    const displayCategoryNameForDisplay = category ? capitalizeWords(category.name) : capitalizeWords(displayCategoryName);

  return (
    <Link key={categoryId} href={`/product-list/${slug}`} className="group">
      <div className="w-full overflow-hidden rounded-lg shadow-md border-black bg-slate-50 dark:bg-gray-700/5">
        <img
          alt={categoryAlt}
          src={categoryImageSrc}
          className="h-full p-10 w-full object-cover object-center group-hover:opacity-75"
        />
        <h3 className="p-4 text-md text-center text-gray-700 dark:text-white first-letter:uppercase">{displayCategoryNameForDisplay}</h3>
      </div>
    </Link>
  )
}

const getDisplayCategory = (category: string): string => {
  if (category.toLowerCase() === 'men apparel') return "Men's Apparel";
  if (category.toLowerCase() === 'women apparel') return "Women's Apparel";
  return category;
};


export default CategoryItem
