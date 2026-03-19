"use client"
import Save from '@/components/model/Save'
import Image from 'next/image'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function page() {
  return (
    <div className='w-full px-[2%]'>
          <div className='pb-[50px]'>
            <div className='flex justify-between place-items-center '>
               <h1 className='text-[18px] lg:text-[20px] font-normal'>New Attribute</h1>
                <div className='flex justify-end items-center gap-8 lg:gap-10 '>
        <Save/>
       
          <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
           <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
        </div>
               </div>
                 <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                <div className='px-[25px] py-[20px]'>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        
              <div>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Attritube" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
               <div>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
               <div>
                 <Input type="title" placeholder="Value" />
              </div>
                <div>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
              
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
  )
}

export default page
