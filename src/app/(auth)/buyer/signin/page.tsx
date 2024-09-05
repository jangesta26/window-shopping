import React from 'react'
import { TabsContent } from "@/components/ui/tabs"
import AuthLoginLayout from '@/components/Tabs/AuthLogin'
import SignInForm from '@/components/Form/SignInForm'
import MobileNumberLoginForm from '@/components/Form/MobileNumberLoginForm'
import AuthTabList from '@/components/Tabs/List/AuthTabList'

const LoginPage = () => {
  return (
    <AuthLoginLayout>
      <AuthTabList />
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
