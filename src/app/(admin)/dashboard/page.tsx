import React from "react"
import Transaction from "@/components/Card/Transaction"
import TableOne from "@/components/Table/TableOne"
import RecentSales from "@/components/Card/RecentSales"
import Stats from "@/components/Card/Stats"

const Dashboard = () => {
  return (
    <>
    <div className="flex w-full flex-col mx-auto">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Stats/>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Transaction>
            <TableOne/>
          </Transaction>
          <RecentSales />
        </div>
      </main>
    </div>
    </>
  )
}

export default Dashboard
