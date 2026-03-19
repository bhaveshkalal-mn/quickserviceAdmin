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
      main: 'Plumber',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     {
      id: '2',
      main: 'Cleaner',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     {
      id: '3',
      main: 'Electrician',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     {
      id: '4',
      main: 'Salon',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     {
      id: '5',
      main: 'Painter',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     {
      id: '6',
      main: 'Movings',
      service: 'Leak Repair, Tap & Faucet Repair, Drain Cleaning, Pipe Repair, Toilet Repair +20',
      action: 'Edit'
    },
     
  ]

  const columns = [
    {
      accessorKey: 'main',
      header: 'Main Service'
    },
    {
      accessorKey: 'service',
      header: 'Services'
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
                  Services
                    </p>
                    <Link href="/dashboard/services/add">
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
               
      <TabsList className="">
        <TabsTrigger className="cursor-pointer" value="all">All Services</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="active">Active</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="draft">Draft</TabsTrigger>
       
      </TabsList>
     
    
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
