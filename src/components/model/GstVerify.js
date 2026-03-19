"use client"
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import OtpInput from '../comman/OtpInput'


function GstVerify() {
  const router = useRouter()
    
  
    const handleClose = () => {
      setOpen(false)
      // setActiveTab(1)
      router.push('/')
    }
       const [activeTab, setActiveTab] = useState(1)

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
            <div className=''>
              <h1 className='text-[15px] lg:text-[20px] xl:text-[24px] font-semibold text-center'>
            Verify GSTIN
              </h1>
              <div className='flex justify-center mt-[10px]'>
                <h1 className='  text-[11px] lg:text-[12px] xl:text-[14px] text-center  font-normal'>
               Enter the email ID and phone number associated with your GSTIN. An OTP will be sent for verification.
                </h1>
              </div>
            </div>
            <div className='flex place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[25px] lg:mt-[35px] xl:mt-[45px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[10px] lg:px-[15px] '>
              <input
                name='email'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black] '
                placeholder='Enter Email ID'
              />
            </div>
             <div className='flex place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[7px] lg:mt-[10px] xl:mt-[15px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[10px] lg:px-[15px] '>
              <input
                name='number'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black] '
                placeholder='Enter Mobile Number'
              />
            </div>
           

            <div className='mt-[25px] lg:mt-[35px] xl:mt-[45px]'>
              <button
                id='gradientbg'
                onClick={
                  activeTab >= 3
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[20px] lg:rounded-[24px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
              >
               
              
                Send OTP
               
               
              </button>
            </div>
            
          </>
        )
      case 2:
        return (
          <>
          <div className=''>
            <div >
              <h1 className='text-[15px] lg:text-[20px] xl:text-[24px] font-semibold text-center'>
                Enter OTP
              </h1>

              <div className='flex justify-center  mt-[10px] '>
                <h1 className=' text-[11px] lg:text-[12px] xl:text-[14px] text-center  font-normal '>
                  <span className='text-[#AEAEAE]'>OTP code sent on </span> +91
                   jit.shrimali@gmail.com
                </h1>
                <Image
                  alt='img'
                  width={0}
                  height={0}
                  src='/assests/login/edit.svg'
                  className=' w-[8px] lg:w-[11px] xl:w-[12px] ml-[2%] mt-[-2px]'
                />
              </div>
                <h1 className=' text-[11px] lg:text-[12px] xl:text-[14px] text-center  font-normal '>and +91 90123 83822</h1>
            </div>
           

            <div className=' flex justify-center   mt-[35px] md:mt-[40px] lg:mt-[56px] xl:mt-[65px]     '>
              <OtpInput length={4} />
            </div>

            <div className='flex justify-center mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]'>
              <h1 className=' text-[10px] lg:text-[13px] xl:text-[14px] text-center  font-medium'>
                <span className='text-[#AEAEAE]'>Resend in </span> 48 Sec.
              </h1>
            </div>
             <DialogClose  className='w-[100%]'>
            <div className='mt-[27px] md:mt-[30px] lg:mt-[50px] xl:mt-[60px]'>
               
              <button
                id='gradientbg'
             
                className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[20px] lg:rounded-[24px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
              >
               
              
                 Submit
             
              </button>
              
            </div>
            </DialogClose>
            </div>
          </>
        )
      
    }
  }
  return (
   <>
   <div>
   <Dialog>
            <DialogTrigger asChild>
   <button className='px-[15px] h-[25px] lg:h-[28px] xl:h-[33px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer'>Verify</button>
            </DialogTrigger>
            <DialogContent showCancelIcon = {false} className='w-[90%] md:w-[320px]  lg:w-[390px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
                 <div className="w-[100%] h-[100%] px-[50px] lg:px-[70px] py-[35px] lg:py-[40px] ">
                      {renderTabContent()}
                 </div>
                 </DialogContent>
                 </Dialog>
                 </div>
   </>
  )
}

export default GstVerify
