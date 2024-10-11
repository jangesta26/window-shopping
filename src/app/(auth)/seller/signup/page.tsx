import SignUpForm from '@/components/Form/Seller/SignUpForm'
import React from 'react'
import Footer from './component/Footer'
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <div className="relative">
      <div className="h-[240px]">
        <Image
          src="https://media.licdn.com/dms/image/D4D12AQFWijmUhrvfSw/article-cover_image-shrink_720_1280/0/1679654578161?e=2147483647&v=beta&t=CludPn0RaE4KuKHQbSlQgnf5ftvflp7jCKNzxrL8hZw"
          alt="Banner Image"
          width={1440}
          height={500}
          className="w-full h-full object-cover"
          quality={100}
        />
      </div>
      <SignUpForm />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default SignUpPage
