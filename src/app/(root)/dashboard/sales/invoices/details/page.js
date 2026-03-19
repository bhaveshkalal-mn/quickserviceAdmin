'use client'
import EmailSend from '@/components/model/EmailSend';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
    const router = useRouter();
  return (
    <>
     <div className='w-full px-[2%]'>
              <div className='pb-[50px]'>
                <div className='flex justify-between place-items-center '>
                   <h1 className='text-[18px] lg:text-[20px] font-normal'>Invoice Details : #INV-1001, <span className='text-[#9317CF]'>Paid</span> </h1>
                   <div className='flex place-items-center gap-x-[25px]'>
                  
                     <div >
                       <EmailSend/>
              </div>
               <div >
                        <Image alt='print'  width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer ml-[10px]' src="/assests/selleradmin/comman/print.svg"/>
              </div>
             
                     <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer ml-[10px]' src="/assests/selleradmin/comman/backarray.svg"/>
                   </div>
                   </div>
                     <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                       <div className='grid grid-cols-4'>
                        <div className='flex justify-between'>
                            <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Buyer Info</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal'>Amit Kumar <br></br> amit@gmail.com </h1>
                                  
                                </div>
                            </div>
                            <div className='w-[1px] h-[100%] bg-[#EBEBEB]'></div>
                        </div>
                         <div className='flex justify-between'>
                            <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Delivery Address</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal'>Ahmedabad state highway, Sector 14, Gandhinagar, Gujarat 382014</h1>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal mt-[10px]'>+91 10000 00001</h1>
                                </div>
                            </div>
                            <div className='w-[1px] h-[100%] bg-[#EBEBEB]'></div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Billing Address</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal'>Ahmedabad state highway, Sector 14, Gandhinagar, Gujarat 382014</h1>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal mt-[10px]'>+91 10000 00001</h1>
                                </div>
                            </div>
                            <div className='w-[1px] h-[100%] bg-[#EBEBEB]'></div>
                        </div>
                         
                          <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Order Details</h1>
                               <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-semibold'>Order ID : <span className=' font-normal'> 02343243</span> <br></br> Oder Date : <span className=' font-normal'> 01-02-2025 10:00 AM</span>  <br></br>Order Status :<span className='font-normal'>Confirmed</span></h1>
                                   
                                </div>
                            </div>
                       </div>
                        </div>
                        
                         <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                            <div className='h-[50px] w-[100%] bg-[#F4F4F4] flex place-items-center '>
                                 <div className='w-[100%] grid grid-cols-5 px-[20px] xl:px-[25px]'>
                                       <div>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Product Name</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>SKU/Variant</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Qty</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                            
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold '>Price</h1>
                                       
                                       </div>
                                          <div className='flex justify-end'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Sub Total</h1>
                                       </div>
                                 </div>
                            </div>
                             <div className='h-[50px] w-[100%] border-b-[1px] border-[#EBEBEB] flex place-items-center '>
                                 <div className='w-[100%] grid grid-cols-5 px-[20px] xl:px-[25px]'>
                                       <div>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Blue T-Shirtl</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>TS-BL-M</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>1</h1>
                                       </div>
                                          <div className='flex justify-center'>
                                            
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold '>₹500</h1>
                                       
                                       </div>
                                          <div className='flex justify-end'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>₹500</h1>
                                       </div>
                                 </div>
                            </div>
                             <div className=' w-[100%] py-[15px] '>
                                 <div className='w-[100%] grid grid-cols-5 px-[20px] xl:px-[25px]'>
                                       <div>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'></h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'></h1>
                                       </div>
                                          <div className='flex justify-center'>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'></h1>
                                       </div>
                                          <div className='flex justify-end'>
                                           
                                                <div>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Order Value</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Discounts</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Shipping Cost</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Platform Commission</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Ad Cost</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Grand Total</h1>
                                       </div>
                                     
                                       </div>
                                          <div className='flex justify-end'>
                                            <div >
                                       
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>₹3,000</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>-₹200</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>₹50</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>₹100</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>0.00</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold text-end'>₹2,850</h1>
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
