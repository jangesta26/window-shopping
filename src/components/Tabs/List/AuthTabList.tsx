'use client'
import React from 'react'
import { TabsTrigger } from "@/components/ui/tabs"
import { Label } from '@/components/ui/label'

const AuthTabList = (
  {
    labelName,
  }:{
    labelName: any
  }) => {
  return (
    <>
      {
        labelName.map((item:any)=>(
          <TabsTrigger key={item.id} value={item.name} className={`flex gap-1 ${item.style}`}>
              {item.icon} 
              <Label className=' first-letter:uppercase'>{item.name}</Label>
          </TabsTrigger>
        ))
      }
    </>
  )
}

export default AuthTabList
