"use client"
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'

import { useRouter } from 'next/navigation';

function Send({ showCancelIcon }) {
    const router = useRouter();
  return (
    <div>
      <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
           <button className='px-[20px] h-[30px] lg:h-[35px] xl:h-[40px] bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer'>Send Reply</button>
        </DialogTrigger>
        <DialogContent showCancelIcon = {false} className='bg-[#fff]  w-[200px] lg:w-[220px] xl:w-[260px]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className='text-center p-[20px] xl:p-[30px] mb-[5px]'>
              <div className='px-[0px] '>
                                     <div className='text-center  mb-[5px]'>
                                       <div className='mt-[10px]'>
                                         <h1 className='text-[14px] xl:text-[16px] place-items-center'>
                                     Your reply has been sent.
                                         </h1>
                                       </div>
                                       <div className='flex gap-x-[15px] mt-[20px] xl:mt-[40px] justify-center'>
                                        
                                           <button
                                            onClick={() => router.back()}
                                             className='px-[25px] h-[35px] xl:h-[40px] bg-[#8225AF] rounded-[8px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                                           >
                                             Okay
                                           </button>
                                       
                                         
                                       </div>
                                     </div>
                                   </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Send
