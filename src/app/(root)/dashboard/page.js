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
    <>
      <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            <div className='flex justify-between place-items-center'>
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                  Dashboard
                </h1>
              </div>
              <div className='flex gap-x-[10px]'>
                {/* <div className='w-44'>
                  <Select>
                    <SelectTrigger className='w-[100%] placeholder:text-[black]'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='option1'>Yesterday</SelectItem>
                      <SelectItem value='option2'>Today</SelectItem>
                      <SelectItem value='option3'>Tomorrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                <div className=''>
                  <div className='flex flex-col gap-3'>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          id='date'
                          className='w-44 justify-between font-normal'
                        >
                          {date ? date.toLocaleDateString() : 'Select date'}
                          <Image
                            alt='add'
                            width={0}
                            height={0}
                            src='/assests/selleradmin/icon/date.svg'
                            className='w-[16px] h-[18px]'
                          />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className='w-auto overflow-hidden p-0'
                        align='start'
                      >
                        <Calendar
                          mode='single'
                          selected={date}
                          captionLayout='dropdown'
                          onSelect={date => {
                            setDate(date)
                            setOpen(false)
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col gap-3'>
                    <Popover open={openmodel} onOpenChange={setOpenmodel}>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          id='date'
                          className='w-44 justify-between font-normal'
                        >
                          {date ? date.toLocaleDateString() : 'Select date'}
                          <Image
                            alt='add'
                            width={0}
                            height={0}
                            src='/assests/selleradmin/icon/date.svg'
                            className='w-[16px] h-[18px]'
                          />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className='w-auto overflow-hidden p-0'
                        align='start'
                      >
                        <Calendar
                          mode='single'
                          selected={datemodel}
                          captionLayout='dropdown'
                          onSelect={datemodel => {
                            setDatemodel(datemodel)
                            setOpenmodel(false)
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[20px]'>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-[10px]'>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Registered Users
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                   8.2M
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Active Bookings
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                   432
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Monthly Revenue
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                   Rs. 43,900
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
                  <p className=' text-[13px] lg:text-[14px] xl:text-[16px] font-semibold'>
                   Growth Trends
                  </p>
                </div>
                <div className='w-[70%] h-[300px] border-[1px] border-[#EBEBEB] rounded-[6px] px-[20px] py-[10px] xl:py-[15px]'>
                  <div className='flex justify-between place-items-center'>
                    <p className='text-[13px] lg:text-[14px] xl:text-[16px] font-semibold'>
                     Recent Activity
                    </p>
                   <p className='text-[11px] lg:text-[12px] xl:text-[14px] text-[#731EE2] font-semibold'>
                  View All
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[30px]'>
              <div className='flex justify-between place-items-center'>
                    <p className='text-[16px] lg:text-[18px] xl:text-[20px] font-medium'>
                    Recently Registered
                    </p>
                   <p className='text-[11px] lg:text-[12px] xl:text-[14px] text-[#731EE2] font-semibold'>
                  View All
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

