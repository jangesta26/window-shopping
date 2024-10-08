'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

interface ObjectContainProps {
  onImageClick: (imageSrc: string) => void;
}

const ObjectContain: React.FC<ObjectContainProps> = ({ onImageClick }) => {

  return (

    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm  "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='bg-gray-800 cursor-pointer'>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <Image
                    src={`https://readymadeui.com/images/product${index + 3}.webp`}
                    alt={`Product${index + 3}`} 
                    onClick={() => onImageClick(`https://readymadeui.com/images/product${index + 3}.webp`)}
                    className='rounded-sm'
                    width={300}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ObjectContain
