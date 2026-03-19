"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {
     const router = useRouter();
  return (
   <>
     <div className='w-full px-[2%]'>
               <div className='pb-[50px]'>
                 <div className='flex justify-between place-items-center '>
                    <h1 className='text-[18px] lg:text-[20px] font-normal'>Order Details (#02343243)  /  Track Order</h1>
                    <div className='flex justify-end items-center gap-8 lg:gap-10'>
                        <Image alt='save'   width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/save.svg"/>
                    <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
                      <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
                         </div>
                    </div>
                    </div>
                    </div>
   </>
  )
}

export default page
