'use client'
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Label } from '../ui/label';
import Footer from '../Footer';
import AuthHeading from '../Navbar/Auth/AuthHeading';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface DefaultAuthLayoutProps {
  children: React.ReactNode;
}

const DefaultAuthLayout: React.FC<DefaultAuthLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const slicedPathname = pathname.slice(1);
  const segments = slicedPathname.split('/');
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background image component */}
      <AuthHeading />
      {/* Main layout container */}
      <div className="flex-1 w-full lg:grid lg:grid-cols-2 lg:min-h-[700px] xl:min-h-[700px] bg-primary p-4 sm:p-6 lg:p-8 place-items-center">
        {
          segments[0] === "seller" 
          ? (
            <div className="hidden lg:flex flex-col items-center justify-center text-muted relative left-8 -lg:left-40">
            <div className='flex flex-col items-center justify-center text-muted'>
              <Label className='text-2xl sm:text-xl lg:text-4xl xl:text-4xl'>
                Be a Power Seller
              </Label>
            </div>
            <div className='mt-2 text-muted text-center'>
              <Label className='font-light text-sm sm:text-xl lg:text-2xl xl:text-2xl'>
                Manage your shop efficiently on Shopee with our Shopee Seller Centre
              </Label>
            </div>
            <Image
              src="/images/shop-centre.png"
              alt="Shop Centre"
              width={400}
              height={400}
              className="shadow-lg mt-4 bg-black/5 p-5 rounded-md"
            />
            </div>
          ):(
            <div className="hidden lg:flex flex-col items-center justify-center text-muted relative left-8 -lg:left-40">
            <div className='flex flex-col items-center justify-center text-muted'>
              <ShoppingBag className="size-20 sm:size-30 lg:size-40 xl:size-60" />
              <Label className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4'>
                Winshopee
              </Label>
            </div>
            <div className='mt-6 lg:mt-8 text-muted text-center'>
              <Label className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>
                The leading online shopping platform in Philippines
              </Label>
            </div>
            </div>
          )
        }
        
        {/* Sign-in form container */}
        <div className="relative flex items-center justify-center z-10">
          <div className="bg-white/70 dark:bg-black/60 p-2 px-4 py-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className='flex h-[580px] items-center justify-center'>
             {children}
            </div>
            <div className='flex items-center justify-center'>
              <Label className='text-sm font-light'>
                <Link href={`${segments[0] === "seller" ? '/buyer':'/seller'}/signin`} className='hover:text-primary underline'>
                {
                  segments[0] === "seller" ? <> Buyer </> : <> Seller Centre </>
                }
                </Link>
              </Label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultAuthLayout;
