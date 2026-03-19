"use client"
import React from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'

function page() {
      const [open, setOpen] = React.useState(false)
      const [date, setDate] = React.useState(false)
      const [openmodel, setOpenmodel] = React.useState(false)
        const [datemodel, setDatemodel] = React.useState(false)
  return (
   <>
    <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            <div className='flex justify-between place-items-center'>
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                  Sales Reports
                </h1>
              </div>
              <div className='flex gap-x-[10px]'>
                
                <div className=''>
                  <div className="flex flex-col gap-3">
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-44 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
           <Image alt='add' width={0} height={0} src="/assests/selleradmin/icon/date.svg" className='w-[16px] h-[18px]'/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
                </div>
                <div className=''>
                  <div className="flex flex-col gap-3">
      
      <Popover open={openmodel} onOpenChange={setOpenmodel}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-44 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
           <Image alt='add' width={0} height={0} src="/assests/selleradmin/icon/date.svg" className='w-[16px] h-[18px]'/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={datemodel}
            captionLayout="dropdown"
            onSelect={(datemodel) => {
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



            </div>
            </div>
            </div>
   </>
  )
}

export default page
