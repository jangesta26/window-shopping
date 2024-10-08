import SignUpForm from '@/components/Form/Seller/SignUpForm'
import React from 'react'
import Footer from './component/Footer'
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <div className="relative">
      <div className="h-[240px]">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/010/813/490/non_2x/the-words-join-us-on-wooden-cube-team-recruitment-register-membership-hiring-human-resources-management-and-business-concept-free-photo.jpg"
          alt="Banner Image"
          className="w-full h-full object-cover"
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
