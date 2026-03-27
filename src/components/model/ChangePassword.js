import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'

function ChangePassword() {
  return (
   <div>
         <Dialog >
           <DialogTrigger asChild>
              <Image alt='edit' width={0} height={0} className='w-[16px] lg:w-[18px] xl:w-[22px] h-[16px] lg:h-[18px] xl:h-[22px] cursor-pointer'  src='/assests/comman/edit.svg'/>
           </DialogTrigger>
           <DialogContent  className='bg-[#fff]  w-[280px] lg:w-[310px] xl:w-[400px]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
             <div className='w-[100%] h-[100%] '>
               <div className='p-[20px] xl:p-[30px] '>
                  <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                      Change Password
                      </h1>

                      <div className='mt-[30px]'>
                        <p className='text-[12px] xl:text-[14px] font-normal'>New Password</p>
                         <input
                          type="password"
                          className="w-[100%] mt-[5px]  h-[35px] lg:h-[40px] xl:h-[50px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[10px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black   "
                         
                        />
                      </div>
                      <div className='mt-[10px] xl:mt-[15px]'>
                        <p className='text-[12px] xl:text-[14px] font-normal'>Confirm Password</p>
                         <input
                          type="password"
                          className="w-[100%] mt-[5px]  h-[35px] lg:h-[40px] xl:h-[50px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[10px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black   "
                         
                        />
                      </div>
                      <div className='mt-[15px] xl:mt-[20px]'>
                        <DialogClose asChild>
                                          <button
                                           
                                            className='w-[100%] h-[35px] lg:h-[40px] xl:h-[50px]  rounded-[10px] hover:opacity-90 bg-[#8225AF] text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                                          >
                                            Update
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

export default ChangePassword
