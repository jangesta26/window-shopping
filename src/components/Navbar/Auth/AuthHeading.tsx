'use client'
import BrandLarge from '@/components/Common/BrandLarge';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthHeading = () => {
  const pathname = usePathname();
  const slicedPathname = pathname.slice(1);
  const segments = slicedPathname.split('/');

  return (
    <div className="relative z-10 h-auto lg:h-[100px] bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-4 lg:py-2 flex flex-col lg:flex-row items-center lg:justify-between shadow-md">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-2">
        <BrandLarge />
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl lg:leading-8">
          Winshopee {"  "} <Label className='font-light text-2xl underline'>{segments[0] === "seller" && <> Seller Centre</> }</Label>
        </h2>
      </Link>
      {/* Help Link */}
      <div className="mt-2 lg:mt-0 lg:ml-4 text-sm lg:text-base">
        <Link href="#something" className="text-blue-500 hover:text-blue-700">Need help?</Link>
      </div>
    </div>
  );
};

export default AuthHeading;
