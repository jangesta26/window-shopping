import React from 'react';
import CustomerServices from './CustomerServices';
import About from './About';
import Copyright from './Copyright';
import PaymentMethods from './PaymentMethods';
import Link from 'next/link';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto px-6 py-10 md:px-8 xl:px-0 mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-8">
            {/* Brand and Description Section */}
            <div className="space-y-6 xl:space-y-8">
              <Link href="#" className="flex items-center gap-2 ">
                <Image
                  src="/images/brandlogo/brandlogo.png"
                  alt="Brand logo"
                  width={50}
                  height={50}
                  className="shadow-lg rounded-md"
                />
                <h2 className="text-2xl font-bold leading-6 text-gray-200">
                  Winshopee
                </h2>
              </Link>
              <p className="max-w-md text-md text-gray-200">
                Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.
              </p>
              <div className="flex space-x-4">
                <SocialMedia />
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-6 xl:col-span-2 xl:flex-row xl:gap-8">
              <CustomerServices />
              <About />
              <PaymentMethods />
            </div>
          </div>
          <div className="mt-0 border-gray-700 pt-6">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
