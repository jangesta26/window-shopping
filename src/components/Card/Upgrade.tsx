import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Upgrade = (props:any) => {
  return (
    <Card x-chunk="dashboard-02-chunk-0">
        <CardHeader className="p-2 md:p-4">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
            {props.description}
        </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full">
            {props.buttonName}
        </Button>
        </CardContent>
    </Card>
  )
}

export default Upgrade
