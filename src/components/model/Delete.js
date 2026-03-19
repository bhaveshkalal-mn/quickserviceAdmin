import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'

function Delete ({ showCancelIcon }) {
  return (
    <div>
      <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
          <div className='p-[6px] rounded-full hover:bg-[#E1E1E1]'>
            <Image
              alt='img'
              width={0}
              height={0}
              className='w-[16px] lg:w-[18px] xl:w-[20px] h-[16px] lg:h-[18px] xl:h-[20px] cursor-pointer '
              src='/assests/setting/delete.svg'
            />
          </div>
        </DialogTrigger>
        <DialogContent showCancelIcon = {false} className='bg-[#fff]  w-[280px] lg:w-[310px] xl:w-[350px]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className='text-center p-[20px] xl:p-[30px] mb-[5px]'>
              <div className='mt-[10px]'>
                <h1 className='text-[18px] xl:text-[20px] place-items-center'>
                 Are you want to delete?
                </h1>
              </div>
              <div className='flex gap-x-[15px] mt-[20px] xl:mt-[40px] justify-between'>
                <DialogClose asChild>
                  <button
                    id='gradientbg'
                    className='w-[100%] h-[40px] xl:h-[50px]  rounded-full hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                  >
                    Yes, Delete
                  </button>
                </DialogClose>
                <DialogClose asChild>
                  <button className='w-[100%] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-full hover:bg-[#F2F7FF] text-[12px] lg:text-[14px] xl:text-[16px] cursor-pointer'>
                    Cancel
                  </button>
                </DialogClose>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Delete
