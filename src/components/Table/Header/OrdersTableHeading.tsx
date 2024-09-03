import * as React from "react"
import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const OrdersTableHeading = (
    { 
        headItem
    }:{
        headItem:any;
    }
) => {
  return (
    <TableHeader>
        <TableRow>
            {
              headItem.map((item:any) =>(
                <TableHead 
                key={item.id}
                className={`${item.className}`}
                >
                    {item.name}
                </TableHead>
              ))  
            }
           
        </TableRow>
    </TableHeader>
  )
}

export default OrdersTableHeading
