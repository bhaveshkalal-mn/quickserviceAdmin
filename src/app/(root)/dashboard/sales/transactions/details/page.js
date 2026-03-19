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
                   <h1 className='text-[18px] lg:text-[20px] font-normal'>Transactions Details (#TXN8745632) </h1>
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
                       <div className='grid grid-cols-3'>
                        <div className='flex justify-between'>
                              <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Order Details</h1>
                               <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-semibold'>Transaction ID : <span className=' font-normal'> TXN8745632</span> <br></br> Oder ID : <span className=' font-normal'>  ORD12345</span><br></br> Type of Transaction :<span className='font-normal'> Payment</span>  <br></br> Status :<span className='font-normal'>Paid</span></h1>
                                   
                                </div>
                            </div>
                            <div className='w-[1px] h-[100%] bg-[#EBEBEB]'></div>
                        </div>
                         <div className='flex justify-between'>
                             <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Buyer</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal'>Amit Kumar <br></br> amit@gmail.com </h1>
                                  
                                </div>
                            </div>
                            <div className='w-[1px] h-[100%] bg-[#EBEBEB]'></div>
                        </div>
                       
                            <div className='px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]'>
                                <h1 className='text-[12px] xl:text-[14px] font-bold'> Seller</h1>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[12px] xl:text-[14px] font-normal'>TrendyStory <br></br> +91 10002 33033 </h1>
                                  
                                </div>
                            </div>
                            
                         
                        
                       </div>
                        </div>
                        
                         <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                           
                             
                             <div className=' w-[100%] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
                                 <div className='w-[100%] grid grid-cols-5 '>
                                      
                                          
                                          <div className='flex  '>
                                           
                                                <div>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Order Value</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Discounts</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Shipping Cost</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Platform Commission</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Ad Cost</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-semibold'>Grand Total</h1>
                                       </div>
                                     
                                       </div>
                                          <div className='flex '>
                                            <div >
                                       
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>₹3,000</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>-₹200</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>₹50</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>₹100</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>0.00</h1>
                                       <h1 className='text-[12px] xl:text-[14px] font-medium text-end'>₹2,850</h1>
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
