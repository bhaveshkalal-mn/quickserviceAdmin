"use client"
import Save from '@/components/model/Save'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function page() {
     const router = useRouter();
  return (
    <>
    <div className='w-full px-[2%] mb-[50px]'>
          <div className='flex justify-between place-items-center'>
              <h1 className='text-[18px] lg:text-[20px] font-normal'>New Role</h1>
               <div className='flex justify-end items-center gap-8 lg:gap-10 '>
        <Save/>
          <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
           <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
        </div>
          </div>
              <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[19px] lg:mt-[28px] px-[15px] xl:px-[20px] py-[15px] xl:py-[20px]'>
                 
                 <div className=' grid grid-cols-2 gap-[15px] lg:gap-[20px]'>
                    
               <div>
                 <Input type="title" placeholder="Name" />
              </div>
              <div>
                 <Input type="title" placeholder="Description" />
              </div>
              
             
             
               
            </div>
            <div>
            <h1 className='text-[12px] xl:text-[14px] font-semibold text-[#8225AF] mt-[15px] xl:mt-[20px]'>Set Permission</h1>
            
            <div className='mt-[15px] xl:mt-[20px] grid grid-cols-2 gap-[15px] lg:gap-[20px] border-[1px] border-[#E2E2E2] rounded-[6px] h-[100px] w-[100%]'>
              
             
              
            </div>
                </div>

                

                

            </div>
          </div>
    </>
  )
}

export default page
