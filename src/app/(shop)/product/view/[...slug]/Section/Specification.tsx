import React from 'react';
import { Label } from '@/components/ui/label';
import Breadcrumbs from '../component/Breadcrumbs';
import Title from './Label/Title';

// Data array with JSX components handled directly in the component
const specificationsData = [
  { id:1, label: 'Category', value: <Breadcrumbs 
    breadcrumbsItem={[{ 
      id: 1,
      title: 'Shopee',
      category: `Men's Apparel`,
      item: 'T-shirt',
      style: 'text-white hover:text-yellow-300',
      activeStyle: 'text-yellow-300'
    }]} 
  /> },
  { id:2, label: 'Discount stock', value: '39971704' },
  { id:3, label: 'Other Stock', value: '3999256' },
  { id:4, label: 'Style', value: 'Basic' },
  { id:5, label: 'Waist Height', value: 'Mid Waist' },
  { id:6, label: 'Season', value: 'Summer' },
  { id:7, label: 'Material', value: 'Chinos, Cotton' },
  { id:8, label: 'Plus Size', value: 'No' },
  { id:9, label: 'Petite', value: 'No' },
  { id:10, label: 'Country of Origin', value: 'Others' },
  { id:11, label: 'Pattern', value: 'Plain, Print, Striped' },
  { id:12, label: 'Ships From', value: 'Pasay City, Metro Manila' }
];

const Specifications = (props:any) => {
  return (
    <>
      <Title 
        title={props.title}
      />
      <div className="w-full p-4  text-white">
        <div className='space-y-4'>
          {specificationsData.map((item) => (
            <div key={item.id} className='grid grid-cols-4 gap-x-4 space-y-2 items-center'>
              <div className='flex items-center'>
                <Label className='text-gray-400'>{item.label}</Label>
              </div>
              <div className='col-span-3 flex items-center'>
                {
                  item.id === 1 ? item.value : <p className='text-sm'>{item.value}</p>
                }
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Specifications;
