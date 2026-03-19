"use client"
import React from 'react'



import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';


function ChangePassword({ showCancelIcon }) {
  return (
     <div>
    <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
             <div className="flex justify-end">
                          <Image
                            alt="edit"
                            width={0}
                            height={0}
                            className="w-[22px] xl:w-[24px] h-[22px] xl:h-[24px] cursor-pointer "
                            src="/assests/selleradmin/comman/editicon.svg"
                          />
                        </div>
        </DialogTrigger>
        <DialogContent showCancelIcon = {false} className='w-[90%] md:w-[350px]  lg:w-[400px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className='px-[20px] xl:px-[30px]   py-[20px] '>
                <h1 className='text-[16px] xl:text-[18px] font-normal'>Change Password</h1>
                <div className='mt-[30px] xl:mt-[35px]'>
                     <div className='  flex  place-items-center w-[100%]  h-11  border-[1px] rounded-[8px] px-[10px] border-[#DDD] hover:border-[black]  '>
                    <input
                      
                      className='outline-none  text-[13px] placeholder:opacity-50  xl:text-[15px] placeholder:text-[black] '
                      placeholder='Current Password'
                    />
                   
                  </div>
                     <div className='mt-[15px] xl:mt-[20px]'>
                        <div className='  flex  place-items-center w-[100%]  h-11  border-[1px] rounded-[8px] px-[10px] border-[#DDD] hover:border-[black]  '>
                    <input
                      
                      className='outline-none w-[95%] text-[13px] placeholder:opacity-50  xl:text-[15px] placeholder:text-[black] '
                      placeholder='Enter Password'
                    />
                     <div className="flex justify-end place-items-center">
                   <Image
                            alt="hide"
                            width={0}
                            height={0}
                            className="w-[14px] xl:w-[16px] h-[10px] xl:h-[11px] cursor-pointer "
                            src="/assests/selleradmin/comman/eye.svg"
                          />
                          </div>
                  </div>
                  </div>
                                  
                                                <div className='mt-[15px] xl:mt-[20px]'>
                                                                   
                                                 <div className='  flex  place-items-center w-[100%]  h-11  border-[1px] rounded-[8px] px-[10px] border-[#DDD] hover:border-[black]  '>
                    <input
                      
                      className='outline-none w-[95%] text-[13px] placeholder:opacity-50  xl:text-[15px] placeholder:text-[black] '
                      placeholder='Confirm Password'
                    />
                    <div className="flex justify-end place-items-center">
                   <Image
                            alt="hide"
                            width={0}
                            height={0}
                            className="w-[14px] xl:w-[16px] h-[10px] xl:h-[11px] cursor-pointer "
                            src="/assests/selleradmin/comman/eye.svg"
                          />
                          </div>
                  </div>
                                     
                                                </div>
                                                 <div className='mt-[40px] xl:mt-[50px] mb-[20px] flex justify-center gap-x-[20px] place-items-center'>
                                                                                    <DialogClose>
                                                                                   <button className='w-[110px] lg:w-[120px] xl:w-[125px] h-11 border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer'>Cancel</button>
                                                                                   </DialogClose>
                                                                                   <DialogClose>
                                                                                     <button className='w-[110px] lg:w-[120px] xl:w-[125px] h-11 bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer'>Verify</button>
                                                                                     </DialogClose>
                                                                                </div>
                </div>
                </div>
                </div>
                </DialogContent>
                </Dialog>
                </div>
  )
}

export default ChangePassword
