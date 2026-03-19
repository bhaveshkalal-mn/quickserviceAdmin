"use client"
import Save from '@/components/model/Save'
import { Input } from '@/components/ui/input';
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
               <h1 className='text-[18px] lg:text-[20px] font-normal'>Amit Kumar</h1>
                <div className='flex justify-end items-center gap-6 lg:gap-8 '>
                     
        <Save/>
        <Image
                       alt="logout"
                       width={0}
                       height={0}
                       className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
                       src="/assests/selleradmin/icon/logout.svg"
                     />
          <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
           <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
        </div>
        </div>
         <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
            <Image
                       alt="banner"
                       width={0}
                       height={0}
                       className="w-[100%] h-[100%]"
                       src="/assests/selleradmin/banner/seller.svg"
                     />
                      <div className='px-[35px] py-[30px]'>
                        <div className='flex place-items-center gap-x-[20px] '>
                             <Image
                       alt="store"
                       width={0}
                       height={0}
                       className="w-[60px] lg:w-[70px] xl:w-[80px] h-[60px] lg:h-[70px] xl:h-[80px] rounded-full"
                       src="/assests/selleradmin/banner/store.svg"
                     />
                      <h1 className='text-[20px] lg:text-[24px] xl:text-[28px] font-semibold'>Galaxy Fashion Hub</h1>
                        </div>
                      </div>
         </div>
         <div className='mt-[15px] flex  gap-x-[15px] xl:gap-x-[20px] w-[100%]'>
            <div className='w-[100%]'>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] '>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>Business info</h1>
                 <div className='mt-[10px] lg:mt-[15px]'>
                     <Input className="" type="title" placeholder="Store Name" />
                      <Input className="mt-[15px]" type="title" placeholder="Owner Name" />
                       <Input className="mt-[15px]" type="title" placeholder="GST/PAN" />
                        <div className='mt-[15px] '>
              <h1 className='text-[12px] xl:text-[14px] font-normal'>Description</h1>
              <div className='border-[1px] border-[#EBEBEB] rounded-[8px] mt-[15px] lg:mt-[20px] h-[300px] '>
                <div className='h-[60px]'></div>
                 <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              </div>
             </div>
                 </div>
               </div>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px]'>
                 <div className=' '>
              <h1 className='text-[12px] xl:text-[14px] font-normal'>Privacy Policy</h1>
              <div className='border-[1px] border-[#EBEBEB] rounded-[8px] mt-[15px] lg:mt-[20px] h-[300px] '>
                <div className='h-[60px]'></div>
                 <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              </div>
             </div>
               </div>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px]'>
                 <div className=' '>
              <h1 className='text-[12px] xl:text-[14px] font-normal'>Shipping Policy</h1>
              <div className='border-[1px] border-[#EBEBEB] rounded-[8px] mt-[15px] lg:mt-[20px] h-[300px] '>
                <div className='h-[60px]'></div>
                 <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              </div>
             </div>
               </div>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px]'>
                 <div className=' '>
              <h1 className='text-[12px] xl:text-[14px] font-normal'>Return Policy</h1>
              <div className='border-[1px] border-[#EBEBEB] rounded-[8px] mt-[15px] lg:mt-[20px] h-[300px] '>
                <div className='h-[60px]'></div>
                 <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              </div>
             </div>
               </div>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] '>
                 <h1 className='text-[12px] xl:text-[14px] font-normal'>Meta Information</h1>
                 <div className='mt-[10px] lg:mt-[15px]'>
                     <Input className="" type="title" placeholder="Meta Title" />
                       
              <textarea placeholder='Meta Keyword'
                                className='mt-[15px] border-[1px] border-[#EBEBEB] rounded-[8px] w-[100%] h-[80px] px-[8px] xl:px-[12px] py-[7px] xl:py-[10px]'
                                
                                />
                                 <textarea placeholder='Meta Description'
                                className='mt-[15px] border-[1px] border-[#EBEBEB] rounded-[8px] w-[100%] h-[80px] px-[8px] xl:px-[12px] py-[7px] xl:py-[10px]'
                                
                                />
             
                 </div>
               </div>
               </div>
               <div className='w-[100%]'>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] '>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>Business info</h1>
                 <div className='mt-[10px] lg:mt-[15px]'>
                     <Input className="" type="title" placeholder="Carrizozo, NM 88301" />
                     <div className='grid grid-cols-2 gap-x-[15px]'>
                      <Input className="mt-[15px]" type="title" placeholder="Postal Code" />
                       <Input className="mt-[15px]" type="title" placeholder="Gandhinagar" />
                         <Input className="mt-[15px]" type="title" placeholder="Gujarat" />
                       <Input className="mt-[15px]" type="title" placeholder="India" />
                        </div>
                 </div>
               </div>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px] pb-[30px]'>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>Product Info</h1>
                 <div className='mt-[10px] lg:mt-[15px] flex justify-between'>
                    <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Total Products</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>120</h1>
                    </div>
                      <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Category</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>Fashion</h1>
                    </div>
                     
                 </div>
               </div>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px] pb-[30px]'>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>Performance Metrics</h1>
                 <div className='mt-[10px] lg:mt-[15px] flex justify-between'>
                    <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Total Order</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>100</h1>
                    </div>
                      <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Cancellation</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>03</h1>
                    </div>
                     <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Refunds</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>001</h1>
                    </div>
                      <div className='w-[100%]'>
                         <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal'>Ratings</h1>
                         <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>4 Stars</h1>
                    </div>
                     
                 </div>
               </div>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px] '>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>KYC</h1>
                 <div className='mt-[10px] lg:mt-[15px]'>
                    <h1 className='text-[14px] xl:text-[16px] font-semibold'>Jit Trading Company</h1>
                     <h1 className='text-[12px] xl:text-[14px] font-normal'>CAH393820</h1>
                       <h1 className='text-[12px] xl:text-[14px] font-normal'>Proprietorship</h1>
                         <h1 className='text-[12px] xl:text-[14px] font-normal'>Near Star Hotel, Sec 11, Hotel Havel. Gandhinagar. Gujarat 33943.</h1>
                     
                 </div>
               </div>
                <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px] '>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>Google Analytics Id</h1>
                 <div className='mt-[10px] lg:mt-[15px]'>
                     <Input className="" type="title" placeholder="Carrizozo, NM 88301" />
                     
                 </div>
               </div>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] px-[25px] py-[15px] mt-[15px] xl:mt-[20px] '>
                 <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-bold'>More</h1>
                 <div className='mt-[10px] lg:mt-[15px] flex justify-between'>
                    <button className='h-[40px] xl:h-[45px] border-[1px] border-[#EBEBEB] hover:bg-[#F0F0F0] rounded-[6px] text-[12px] xl:text-[14px] font-normal px-[15px] lg:px-[20px] xl:px-[30px] cursor-pointer'>Suspend</button>
                     <button className='h-[40px] xl:h-[45px] border-[1px] border-[#EBEBEB] hover:bg-[#F0F0F0] rounded-[6px] text-[12px] xl:text-[14px] font-normal px-[15px] lg:px-[20px] xl:px-[30px] cursor-pointer'>Change Password</button>
                      <button className='h-[40px] xl:h-[45px] border-[1px] border-[#EBEBEB] hover:bg-[#F0F0F0] rounded-[6px] text-[12px] xl:text-[14px] font-normal px-[15px] lg:px-[20px] xl:px-[30px] cursor-pointer'>LogOut</button>
                     
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
