"use client"
import Image from 'next/image'
import React from 'react'



function page() {
     
  return (
   <>
   <div className='px-[2%]'>
         <div className='flex justify-between place-items-center'>
                       <p className='text-[16px] lg:text-[18px] xl:text-[20px] font-normal'>
                   Roles
                       </p>
                    
                       <Image
                       alt='add'
                       width={0}
                       height={0}
                       className='w-[20px] xl:w-[22px] cursor-pointer'
                       src="/assests/comman/add.svg"
                       />
                      
                       </div>
                         <div className="mt-[20px]">
                          </div>
                          </div>
   </>
  )
}

export default page
