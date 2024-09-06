import React from 'react'

import Footer from '@/components/Footer';
import Header from '../Navbar/Client';

interface DefaultClientLayoutProps {
    children: React.ReactNode;
}
const DefaultClientLayout: React.FC<DefaultClientLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      { children }
      <Footer/>
    </>
  )
}

export default DefaultClientLayout
