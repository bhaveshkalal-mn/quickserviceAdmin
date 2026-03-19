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
      service: 'Deep Clean House',
      amount: '120.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'In Progress',
      action: 'Track'
    },
     {
      id: '2',
      service: 'Hair Cut',
      amount: '100.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'In Progress',
      action: 'Track'
    },
     {
      id: '3',
      service: 'Make Up',
      amount: '200.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'In Progress',
      action: 'Track'
    },
     {
      id: '4',
      service: 'Hari Colouring',
      amount: '300.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'In Progress',
      action: 'Track'
    },
     {
      id: '5',
      service: 'Pipe Fitting',
      amount: '400.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'Assigned',
      action: 'Contact Provider'
    },
     {
      id: '6',
      service: 'Fan Repairing',
      amount: '500.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'Completed',
      action: ''
    },
     {
      id: '7',
      service: 'Pipe Leakage',
      amount: '600.00',
       location: 'Sarthak Appt. Surat, Gujarat',
      date: '01/02/2026 02:00 PM',
        status: 'Completed',
      action: ''
    },
    
  ]

  const columns = [
    {
      accessorKey: 'service',
      header: 'Service'
    },
    {
      accessorKey: 'amount',
      header: 'Amount'
    },
     {
      accessorKey: 'location',
      header: 'Location'
    },
    
    {
      accessorKey: 'date',
      header: 'Date and Time'
    },
     {
      accessorKey: 'status',
      header: 'Status'
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
                  Bookings
                    </p>
                  <Link className='cursor-pointer' href="/dashboard/booking/progress">
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
        <TabsTrigger className="cursor-pointer" value="all">All Bookings</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="progress">In Progress</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="completed">Completed</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="assigned">Assigned</TabsTrigger>
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
