"use client"
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Input } from '../ui/input';

function EmailSend() {
    const router = useRouter();
  return (
    <div>
      <Dialog >
        <DialogTrigger asChild>
         <Image alt='mail'  width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer ml-[10px]' src="/assests/selleradmin/comman/email.svg"/>
        </DialogTrigger>
        <DialogContent  className='bg-[#fff]  w-[280px] lg:w-[350px] xl:w-[400px]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className=' p-[20px] xl:p-[30px] mb-[5px]'>
              <div className='px-[0px] '>
                                     <div className=' mb-[5px]'>
                                       <div className=''>
                                         <h1 className='text-[16px] xl:text-[18px] font-normal'>
                                    Send Copy to
                                         </h1>
                                       </div>
                                       <div className='mt-[20px] xl:mt-[30px] px-[15px] xl:px-[20px] flex  place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[45px] rounded-[6px]  border-[1px] border-[#EBEBEB] hover:border-[black]  '>
                    <input
                  
                      className='outline-none w-[100%] text-[12px] xl:text-[14px]   placeholder:text-[black]  '
                      placeholder='Email'
                    />
                  </div>
                                       <div className='flex gap-x-[15px] mt-[20px] xl:mt-[30px] justify-end'>
                                        <DialogClose>
                                           <button
                                           
                                             className='px-[25px] h-[35px] lg:h-[40px] xl:h-[45px] bg-[#8225AF] rounded-[8px] hover:opacity-90 text-[12px] xl:text-[14px] text-[white] cursor-pointer'
                                           >
                                            Send
                                           </button>
                                       </DialogClose>
                                         
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

export default EmailSend
