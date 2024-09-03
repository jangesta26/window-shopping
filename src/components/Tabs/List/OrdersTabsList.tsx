import React from 'react'
import {
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const OrderTabsList = (
{
  listItem,
}:{
  listItem:any
}
) => {
  return (
    <TabsList>
      {
        listItem.map((item:any)=>(
          <TabsTrigger value="week">{item.listName}</TabsTrigger>
        ))
      }
      
    </TabsList>
  )
}

export default OrderTabsList
