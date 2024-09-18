'use client'
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Check } from 'lucide-react';


interface onImageClickProps {
    onImageClick: (imageSrc: string) => void;
}

const ProductForm: React.FC<onImageClickProps> = ({onImageClick}) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
    const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);

    const handleIncrement = () => {

        setQuantity(prevQuantity => prevQuantity + 1);
    };


    const handleDecrement = () => {
        setQuantity(prevQuantity => prevQuantity - 1)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue:any = e.target.value;
        setQuantity(newValue)
    };

return (
    <form className="flex flex-col space-y-4 max-w-full mx-auto text-white">
        <div className='flex items-center gap-[40px] text-sm font-light'>
            <Label className='text-sm'>Color</Label>
            <div className='overflow-y-auto max-h-48 space-y-2'>
                <ToggleGroup
                type="single"
                value={selectedColor}
                defaultValue={selectedColor}
                onValueChange={setSelectedColor}
                variant="outline"
                className='grid grid-cols-3 gap-x-3.5'
                >
                {Array.from({ length: 5 }).map((_, index) => (

                        <ToggleGroupItem 
                        key={index}
                        value={`${index + 3}`} 
                        aria-label='Toggle color'
                        className='flex items-center justify-between text-[9px] w-20 h-10 border-[1px] border-white hover:border-gray-800 shrink-0'
                        >
                        <img 
                            src={`https://readymadeui.com/images/product${index + 3}.webp`}
                            alt={`Product${index + 3}`} 
                            width={20}
                            height={20}
                            onClick={() => onImageClick(`https://readymadeui.com/images/product${index + 3}.webp`)}
                        />
                        {selectedColor === `${index + 3}` && <Check />} 
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div> 
        </div>
        <div className='flex items-center gap-[50px] text-sm font-light'>
            <Label className='text-sm'>Size</Label>
            <ToggleGroup
            type="single"
            value={selectedSize}
            onValueChange={setSelectedSize}
            variant="outline"
            >
                <ToggleGroupItem value="s" aria-label="Toggle bold">
                    S
                </ToggleGroupItem>
                <ToggleGroupItem value="m" aria-label="Toggle bold">
                    M
                </ToggleGroupItem>
                <ToggleGroupItem value="l" aria-label="Toggle bold">
                    L
                </ToggleGroupItem>
                <ToggleGroupItem value="xl" aria-label="Toggle bold">
                    XL
                </ToggleGroupItem>
            </ToggleGroup>
        </div>

        <div className="flex flex-wrap items-center gap-4">
            <Label className='text-white'>Quantity</Label>
            <div className='relative flex items-center max-w-[10rem]'>
                <button 
                    type="button" 
                    data-input-counter-decrement="quantity-input" 
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleDecrement}
                    disabled={quantity === 1} // Disable if quantity is 1
                >
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                </button>
                <input 
                    type="text"
                    value={quantity}
                    onChange={handleChange}
                    aria-describedby="helper-text-explanation" 
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                    required
                />
                <button 
                    type="button" 
                    data-input-counter-increment="quantity-input" 
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleIncrement}
                >
                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
            <p className="mt-2 text-sm text-white dark:text-gray-400">
                {99999} pieces available
            </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
            <button type="button" className="w-full lg:min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded">
                Add to cart
            </button>
            <button type="button" className="w-full lg:min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">
                Buy now
            </button>
        </div>
    </form>
    );
}

export default ProductForm;
