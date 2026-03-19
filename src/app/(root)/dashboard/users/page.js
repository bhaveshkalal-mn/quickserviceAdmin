import DataTable from '@/components/Admin/module/DataTable'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
     const data = [
    {
      id: '1',
      name: 'Star Salon',
      role: 'Provider',
       status: 'Active',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '2',
      name: 'Rahul Patel',
      role: 'Customer',
       status: 'Inactive',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '3',
      name: 'RK Electronics',
      role: 'Provider',
       status: 'Disabled',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '4',
      name: 'Rajesh Painter',
      role: 'Provider',
       status: 'Blocked',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '5',
      name: 'Mohan Furniture',
      role: 'Provider',
       status: 'Deleted',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '6',
      name: 'Param Patel',
      role: 'Customer',
       status: 'Inactive',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '7',
      name: 'Ved Patel',
      role: 'Customer',
       status: 'Inactive',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
     {
      id: '8',
      name: 'Priya Goswami',
      role: 'Customer',
       status: 'Inactive',
      login: 'Oct 24, 2023 14:20:30',
      action: 'Edit'
    },
  ]

  const columns = [
    {
      accessorKey: 'name',
      header: 'User Name'
    },
    {
      accessorKey: 'role',
      header: 'Role'
    },
     {
      accessorKey: 'status',
      header: 'Status'
    },
    {
      accessorKey: 'login',
      header: 'Last Login'
    },
    {
      accessorKey: 'action',
      header: 'Action'
      ,
     
    }
  ]
  return (
    <div className='px-[2%]'>
      <div className='flex justify-between place-items-center'>
                    <p className='text-[16px] lg:text-[18px] xl:text-[20px] font-normal'>
                   Users
                    </p>
                    <Link href="/dashboard/users/addprofile">
                    <Image
                    alt='add'
                    width={0}
                    height={0}
                    className='w-[20px] xl:w-[22px] cursor-pointer'
                    src="/assests/comman/add.svg"
                    />
                    </Link>
                    </div>
                      <div className="mt-[20px]">
            <Tabs defaultValue="all" className=" w-[100%]">
                <div className=' flex justify-between place-items-center'>
      <TabsList className="">
        <TabsTrigger className="cursor-pointer" value="all">All Users</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="provider">Service Providers</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="customers">Customers</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="suspended">Suspended</TabsTrigger>
      </TabsList>
      <div>
         <Sheet>
      <SheetTrigger asChild>
        <div  className=' flex gap-x-[10px] cursor-pointer'>
             <Image
                    alt='icon'
                    width={0}
                    height={0}
                    className='w-[20px] xl:w-[24px]'
                    src="/assests/comman/fillter.svg"
                    />
                  <p className='text-[12px] xl:text-[14px] font-normal'>Filter</p> 
                </div>
      </SheetTrigger>
      <SheetContent>
        
      </SheetContent>
    </Sheet>
      </div>
      </div>
      <TabsContent  value="all">
        
 <div>
            <DataTable data={data} columns={columns} />
          </div>
         
      </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}

export default page
