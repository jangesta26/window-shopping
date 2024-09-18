import React from 'react'
import { TabsContent, TabsList } from "@/components/ui/tabs"
import AuthLoginLayout from '@/components/Tabs/AuthLogin'
import SignInForm from '@/components/Form/SignInForm'
import MobileNumberLoginForm from '@/components/Form/MobileNumberLoginForm'
import AuthTabList from '@/components/Tabs/List/AuthTabList'
import { Mail } from 'lucide-react'
import { MobileIcon } from '@radix-ui/react-icons'
const LoginPage = () => {
  return (
    <AuthLoginLayout>
      <TabsList className='grid grid-cols-2 w-full'>
        <AuthTabList 
          labelName={[
            {
              id:1,
              name:"email",
              icon: <Mail className='h-4'/>,
              style:''
            },
            {
              id:2,
              name:"phone",
              icon: <MobileIcon className='h-4'/>,
              style:''
            }
        ]}/>
      </TabsList>
        <TabsContent value="email">
          <SignInForm />
        </TabsContent>
        <TabsContent value="phone">
          <MobileNumberLoginForm />
        </TabsContent>
    </AuthLoginLayout>
  )
}

export default LoginPage
