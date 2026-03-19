'use client'

import Save from '@/components/model/Save';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
    const router = useRouter();
  return (
    <>
    <div className='w-full px-[2%]'>
          <div className='pb-[50px]'>
            <div className='flex justify-between place-items-center '>
               <h1 className='text-[18px] lg:text-[20px] font-normal'>Review Details</h1>
                <div className='flex justify-end items-center gap-8 lg:gap-10 '>
        <Save/>
          <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
           <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
        </div>
               </div>
                 <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                <div className='px-[25px] py-[20px]'>
                    <div className='grid grid-cols-5 gap-[10px]'>
                        <div className=''>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>Review Date</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>01-02-2024</h1>
                        </div>
                         <div className=' '>
                           <div>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>Customer ID</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>100021</h1>
                        </div>
                        </div>
                        
                         <div className=' '>
                           <div>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>Customer Name</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>Amit Kumar</h1>
                        </div>
                        </div>
                         <div className=' place-items-center'>
                           <div>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>Product Name</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>Designer Traditional Dress</h1>
                        </div>
                        </div>
                         <div className=' place-items-center'>
                           <div>
                            <h1 className='text-[14px] xl:text-[16px] font-semibold'>SKU</h1>
                             <h1 className='text-[14px] xl:text-[16px] font-normal'>Dresses</h1>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[15px] lg:mt-[20px] xl:mt-[30px]'>
                           <h1 className='text-[14px] xl:text-[16px] font-medium text-[#8225AF]'>Ratings & Review</h1>
                            <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
                            <div className='mt-[10px] xl:mt-[15px]'>
                                <Image 
                                alt='rating'
                                width={0}
                                height={0}
                                className='w-[160px] h-[24px] rounded-sm object-cover'
                                src="/assests/selleradmin/icon/rating.svg"
                                />
                                <h1 className='mt-[10px] xl:mt-[15px] text-[14px] xl:text-[16px] font-normal'>This product is amazing! 🎉 It exceeded my expectations in every way. The quality is top-notch, the design is sleek, and it arrived faster than I anticipated. 🚀 I can't imagine my life without it now. Worth every penny! 💯 Highly recommended! 👍</h1>
                               
                                <div className='mt-[20px] xl:mt-[25px] '>
                                     <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
                            <div className='mt-[10px] xl:mt-[15px]'>
                              <h1 className='text-[14px] font-normal'>Status</h1>
                               <div className='mt-[10px] xl:mt-[15px]'>
                 <Select>
      <SelectTrigger className="w-[25%]">
        <SelectValue placeholder="Pending" />
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
                </div>
               </div>
               </div>
    </>
  )
}

export default page
