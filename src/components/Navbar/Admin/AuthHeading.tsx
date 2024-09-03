import Image from 'next/image';
import Link from 'next/link';

const AuthHeading = () => {
  return (
    <div className="relative z-10 h-auto lg:h-[100px] bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-4 lg:py-2 flex flex-col lg:flex-row items-center lg:justify-between shadow-md">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/brandlogo/brandlogo.png"
          alt="Brand logo"
          width={80}
          height={80}
          className="shadow-lg"
        />
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-8">
          Winshopee
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
