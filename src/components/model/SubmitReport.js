"use client"
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function SubmitReport({ showCancelIcon }) {
     const router = useRouter();
  return (
    <div>
    
      <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
             <button className='px-[20px] h-[30px] lg:h-[35px] xl:h-[40px] border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer'>Report to Admin</button>
        </DialogTrigger>
        <DialogContent showCancelIcon = {false} className='bg-[#fff]  w-full    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className='px-[20px] xl:px-[30px]   py-[20px] '>
                <h1 className='text-[16px] xl:text-[18px] font-normal'>Submit Report</h1>
                
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              <div className=' px-[20px] xl:px-[30px]  py-[10px] xl:py-[20px] pb-[30px]'>
              <div className=''>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>Customer Name
</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>Amit Kumar</h1>
                        </div>
                        <div className='mt-[10px] xl:mt-[15px]'>
                                <Image
                                alt='rating'
                                width={0}
                                height={0}
                                className='w-[160px] h-[24px] rounded-sm object-cover'
                                src="/assests/selleradmin/icon/rating.svg"
                                />
                                <h1 className='mt-[10px] xl:mt-[15px] text-[14px] xl:text-[16px] font-normal'>This product is amazing! 🎉 It exceeded my expectations in every way. The quality is top-notch, the design is sleek, and it arrived faster than I anticipated. 🚀 I can't imagine my life without it now. Worth every penny! 💯 Highly recommended! 👍</h1>
                               <div className='mt-[10px] xl:mt-[15px]'>
                                  <h1 className='text-[12px] xl:text-[14px] font-normal'>Select Reason</h1>
                                  <div className='mt-[5px]'>
                 <Select >
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select Problem" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
    </div>
              </div>
                                <div className='mt-[20px] xl:mt-[25px] flex justify-center gap-x-[20px] place-items-center'>
                                    <DialogClose>
                                   <button className='px-[20px] h-[30px] lg:h-[35px] xl:h-[40px] border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer'>Cancel</button>
                                   </DialogClose>
                                   <DialogClose>
                                     <button className='px-[20px] h-[30px] lg:h-[35px] xl:h-[40px] bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer'>Submit Report</button>
                                     </DialogClose>
                                </div>
                            </div>
              {/* <div className='px-[0px] '>
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
                                   </div> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SubmitReport
