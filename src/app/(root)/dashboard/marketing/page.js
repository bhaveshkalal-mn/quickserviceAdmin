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
                 Marketing
                </h1>
              </div>
              
            </div>



            </div>
            </div>
            </div>
   </>
  )
}

export default page
