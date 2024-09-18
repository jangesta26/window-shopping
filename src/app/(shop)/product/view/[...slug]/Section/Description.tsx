import React from 'react';
import { Label } from '@/components/ui/label';
import Title from './Label/Title';

const ProductsDescription = [
  {
    id: 1,
    name: "TASLAN SHORT (UNISEX)",
    length: "15 inches",
    waistline: "26 to 32 inches",
    pockets: "2 pockets",
    size: "Freesize",
    print: "With vinyl print",
    features: "Water-repellent",
    quality: "Good and high quality",
    note: "Taslan fabric is very expensive. If you don't know about it, please don't place your order. Thank you!",
    paymentMethod: "COD",
    keyFeatures: [
      "🔖 Pure Taslan fabric",
      "🔖 With side pockets",
      "🔖 With cord",
      "🔖 Individually packaged",
      "🔖 Freesize (fits 26-32 inches)",
      "🔖 Length: 16-17 inches",
      "🔖 Leg hole: 24-25 inches",
      "🔖 Rubberized vinyl prints",
      "🔖 Random colors and designs"
    ]
  }
];

const Description = (props:any) => {
  const product = ProductsDescription[0]; // Displaying the first product

  return (
    <>
      <Title title={props.title} />
      <div className="w-full p-4 text-white">
        <div className='space-y-4'>
          <h2 className="text-lg font-bold">{product.name}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {[
              { label: 'Length', value: product.length },
              { label: 'Waistline', value: product.waistline },
              { label: 'Pockets', value: product.pockets },
              { label: 'Size', value: product.size },
              { label: 'Print', value: product.print },
              { label: 'Features', value: product.features },
              { label: 'Quality', value: product.quality },
            ].map((item, index) => (
              <div key={index} className='flex items-center'>
                <Label className='text-gray-400'>{item.label}:</Label>
                <span className='ml-2'>{item.value}</span>
              </div>
            ))}
          </div>
          <p className='text-gray-400'>{product.note}</p>
          <p className='text-gray-400'><strong>Payment Method:</strong> {product.paymentMethod}</p>

          <h3 className="text-lg font-bold">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-400">
            {product.keyFeatures.map((feature, index) => (
              <li key={index}> {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Description;
