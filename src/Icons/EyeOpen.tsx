import React from 'react';

const EyeOpen = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      width="30px" 
      height="30px" 
      viewBox="0 0 32.00 32.00" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer'
    >
      <path
        d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" 
        stroke="#bbb" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        fill='none'
      />
    </svg>
  );
}

export default EyeOpen;
