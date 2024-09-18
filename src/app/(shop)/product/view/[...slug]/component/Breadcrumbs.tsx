import React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
  const Breadcrumbs = (
    {
      breadcrumbsItem
    }:{
      breadcrumbsItem:any
    }
  ) => {
    return (
      <>
      {
       breadcrumbsItem.map((item:any) => (
        <Breadcrumb key={item.id}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className={item.style}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='#' className={item.style}>{item.category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className={item.activeStyle}>{item.item}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
       )) 
      }

      </>

    )
  }

  export default Breadcrumbs
  