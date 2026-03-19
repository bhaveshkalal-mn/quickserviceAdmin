'use client'

import SellerHeader from '@/components/layout/SellerHeader'
import { AppSidebar } from '@/components/Admin/Layout/Sidebar/components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

const Layout = ({ children }) => {
  return (
    <SidebarProvider className=''>
      <AppSidebar />
      <SidebarInset className='w-[100%]'>
        <header className='bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b-[1px] border-b-gray-100 p-[14.5px] lg:p-4'>
          <SellerHeader />
        </header>
        <main>
          <div className='mt-5 '>{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
