import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CreateNewOrder = (
  { 
    title,
    description,
    label
  }:{
    title:string
    description:string
    label:string
  }
) => {
  return (
    <Card
    className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
  >
    <CardHeader className="pb-3">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-balance max-w-lg leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button>{label}</Button>
    </CardFooter>
  </Card>
  )
}

export default CreateNewOrder
