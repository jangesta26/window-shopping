import React from 'react'
import { TabsContent,  TabsList } from "@/components/ui/tabs"
import AuthLoginLayout from '@/components/Tabs/AuthLogin'
import AuthTabList from '@/components/Tabs/List/AuthTabList'
import SignUpForm from '@/components/Form/buyer/SignUpForm'
import { Mail } from 'lucide-react'

const SignUpPage = () => {
  return (
    <AuthLoginLayout>
       <TabsList className="w-full">
        <AuthTabList 
        labelName={[
          {
            id:1,
            name:"email",
            icon: <Mail className='h-4'/>,
            style:'w-full'
          }
        ]

        }/>
      </TabsList>
      <TabsContent value="email">
        <SignUpForm />
      </TabsContent>
    </AuthLoginLayout>
  )
}

export default SignUpPage
