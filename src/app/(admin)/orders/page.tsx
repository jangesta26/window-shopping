import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Table } from "@/components/ui/table"
import { CardContent } from "@/components/ui/card"
import Breadcrumbs from "@/components/Breadcrumb/Breadcrumbs"
import CreateNewOrder from "@/components/Card/CreateNewOrder"
import CardChunk from "@/components/Card/CardChunk"
import OrdersTab from "@/components/Tabs/OrdersTab"
import TableOrders from "@/components/Table/Orders/TableOrders"
import OrdersTableHeading from "@/components/Table/Header/OrdersTableHeading"
import BillingStatement from "./component/Card"
import OrdersCardHeader from "./component/Card/OrdersCardHeader"
import OrderDetails from "./component/Card/OrderDetails"
import ShippingInformations from "./component/Card/ShippingInformations"
import BillingInformations from "./component/Card/BillingInformations"
import CustomerInformations from "./component/Card/CustomerInformations"
import PaymentInformations from "./component/Card/PaymentInformations"

const OrdersPage = () => {
  return (
    <>
        <Breadcrumbs/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <CreateNewOrder
                    title = "Your Orders"
                    description=" Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis."
                    label="Create New Order"
                />
                <CardChunk
                    descriptoin="This Week"
                    title="$1,329"
                    content="+25% from last week"
                    value={25}
                />
                <CardChunk
                    descriptoin="This Month"
                    title="$5,329"
                    content="+10% from last month"
                    value={12}
                />
            </div>
                <OrdersTab>
                    <Table>
                       <OrdersTableHeading
                       headItem= {[
                        {
                            id:1,
                            name:"Customer"
                        }, 
                        {
                            id:2,
                            name:"Type",
                            className:"hidden sm:table-cell"
                        },
                        {
                            id:3,
                            name:"Status",
                            className:"hidden sm:table-cell"
                        },
                        {
                            id:4,
                            name:"Date",
                            className:"hidden sm:table-cell"
                        },
                        {
                            id:5,
                            name:"Amount",
                            className:"text-right"
                        }
                         
                        ]}
                       /> 
                        <TableOrders/>
                    </Table>
                </OrdersTab>
          </div>
          <BillingStatement>
            <OrdersCardHeader />
              <CardContent className="p-6 text-sm">
                <OrderDetails />
                  <Separator className="my-4" />
                  <div className="grid grid-cols-2 gap-4">
                        <ShippingInformations />
                        <BillingInformations />
                  </div>
                  <Separator className="my-4" />
                  <CustomerInformations />
                  <Separator className="my-4" />
                <PaymentInformations />
              </CardContent>
          </BillingStatement>
        </main>
    </>
  )
}

export default OrdersPage
