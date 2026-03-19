'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'
import DataTable from '@/components/Admin/module/DataTable'


function page () {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(false)
  const [openmodel, setOpenmodel] = React.useState(false)
  const [datemodel, setDatemodel] = React.useState(false)

   const data = [
    {
      id: '1',
    provider: 'Shah Cleaning',
      service: 'Deep Clean House',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Completed',
      action: 'Refund'
    },
      {
      id: '2',
    provider: 'Patel Unisex Salon',
      service: 'Hair Cut',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Completed',
      action: 'Refund'
    },
      {
      id: '3',
    provider: 'Pooja Beauty Parlour',
      service: 'Make Up',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Completed',
      action: 'Refund'
    },
      {
      id: '4',
    provider: 'Sayed Plumbing',
      service: 'Hari Colouring',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Completed',
      action: 'Refund'
    },
      {
      id: '5',
    provider: 'RK Electronics',
      service: 'Pipe Fitting',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Refunded',
      action: 'Refunded'
    },
     {
      id: '6',
    provider: 'Sayed Plumbing',
      service: 'Fan Repairing',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Refunded',
      action: 'Refunded'
    },
      {
      id: '7',
    provider: 'RK Electronics',
      service: 'Pipe Leakage',
      date: '01/02/2026 02:00 PM',
       amount: '120.00',
        status: 'Refunded',
      action: 'Refunded'
    },
     
  ]

  const columns = [
     {
      accessorKey: 'provider',
      header: 'Providers'
    },
    {
      accessorKey: 'service',
      header: 'Service'
    },
    {
      accessorKey: 'date',
      header: 'Date and Time'
    },
    {
      accessorKey: 'amount',
      header: 'Amount'
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
    <>
      <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            <div className='flex justify-between place-items-center'>
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                 Revenue
                </h1>
              </div>
              
            </div>
            <div className='mt-[20px]'>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-[10px]'>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                  Total Commissions
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                24.1K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                  Pending Payouts
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                  24.5K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                 Active Subscriptions
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                 2.3K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black]  rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                 Avg Ratings
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                  4.6
                  </h1>
                </div>
               
              </div>
            </div>
            <div className='mt-[20px]'>
              <div className='flex gap-x-[20px]'>
                
                <div className='w-[100%] h-[300px] border-[1px] border-[#EBEBEB] rounded-[6px] px-[20px] py-[10px] xl:py-[15px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                  Revenue Growth
                  </p>
                   <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                 Rs. 24.1K
                  </h1>
                </div>
                <div className='w-[100%] h-[300px] border-[1px] border-[#EBEBEB] rounded-[6px] px-[20px] py-[10px] xl:py-[15px]'>
                  <div className=''>
                    <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                    Revenue by Categories
                    </p>
                    <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                 Rs. 24.1K
                  </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[30px]'>
              <div className='flex justify-between place-items-center'>
                    <p className='text-[16px] lg:text-[18px] xl:text-[20px] font-medium'>
                   Recent Transactions
                    </p>
                   
                  </div>
                   <div>
            <DataTable data={data} columns={columns} />
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page

