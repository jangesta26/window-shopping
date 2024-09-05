import * as React from "react"
import { Tabs } from "@/components/ui/tabs"
import Filter from "../Dropdown/Filter"
import ExportButton from "../Button/ExportButton"
import OrderTabsList from "./List/OrdersTabsList"
import { TabsContent } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface OrdersTabProps {
    children: React.ReactNode;
}

const OrdersTab: React.FC<OrdersTabProps> = ({ children }) => {
  return (
    <Tabs defaultValue="week">
        <div className="flex items-center">
            <OrderTabsList 
            listItem={[
                {id:1, listName:"Week"},
                {id:2, listName:"Month"},
                {id:3, listName:"Year"}
            ]}
            />
        <div className="ml-auto flex items-center gap-2">
            <Filter />
            <ExportButton />
        </div>
        </div>
        <TabsContent value="week">
            <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                Recent orders from your store.
                </CardDescription>
            </CardHeader>
                <CardContent>
                    { children }
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
  )
}

export default OrdersTab
