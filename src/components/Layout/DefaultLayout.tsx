import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar/Admin/Navbar'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
