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
        <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
            {props.description}
        </CardDescription>
        </CardHeader>
        <CardContent>
        <Button size="sm" className="w-full">
            {props.buttonName}
        </Button>
        </CardContent>
    </Card>
  )
}

export default Upgrade
