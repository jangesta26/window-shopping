import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});