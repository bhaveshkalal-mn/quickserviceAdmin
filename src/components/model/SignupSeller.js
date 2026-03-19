"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import OtpInput from '../comman/OtpInput'
import Link from 'next/link'

function SignupSeller() {
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
              Sign up as Seller
              </h1>
              <div className='flex justify-center '>
                <h1 className='  text-[11px] lg:text-[13px] xl:text-[14px] text-center  font-normal'>
                 Here is where your business growth begins
                </h1>
              </div>
            </div>
            <div className='flex place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[15px] lg:mt-[20px] xl:mt-[25px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[10px] lg:px-[15px] '>
              <input
                name='name'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black] '
                placeholder='Enter Your Name'
              />
            </div>
             <div className='flex place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[7px] lg:mt-[10px] xl:mt-[15px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[10px] lg:px-[15px] '>
              <input
                name='business name'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px] placeholder:text-[black] '
                placeholder='Enter Your Business Name'
              />
            </div>
            <div className='flex place-items-center w-[100%] h-[35px] lg:h-[40px] xl:h-[50px] mt-[7px] lg:mt-[10px] xl:mt-[15px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[10px] lg:px-[15px] '>
              <input
                name='email'
                className='outline-none w-[100%] text-[12px] lg:text-[14px] xl:text-[16px] placeholder:text-[black]'
                placeholder='Enter Email or Mobile'
              />
            </div>

            <div className='mt-[15px] lg:mt-[20px] xl:mt-[25px]'>
              <button
                id='gradientbg'
                onClick={
                  activeTab >= 3
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[20px] lg:rounded-[24px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
              >
               
              
                  Continue
               
               
              </button>
            </div>
            <div className='flex justify-center mt-[15px] lg:mt-[20px] xl:mt-[25px]'>
              <h1 className=' text-[8px] lg:text-[11px] xl:text-[12px] text-center lg:w-[250px] xl:w-[300px] font-medium'>
                By creating account, I Agee to Happy Milan Business{' '}
                <span className='text-[#0F52BA]'>Privacy Policy</span> and
                <span className='text-[#0F52BA]'>T&C</span>
              </h1>
            </div>
          </>
        )
      case 2:
        return (
          <>
          <div className='py-[10px]'>
            <div >
              <h1 className='text-[15px] lg:text-[20px] xl:text-[24px] font-semibold text-center'>
                Verify Mobile
              </h1>

              <div className='flex justify-center  mt-[5px] '>
                <h1 className=' text-[10px] lg:text-[13px] xl:text-[14px] text-center  font-normal '>
                  <span className='text-[#AEAEAE]'>OTP code sent on </span> +91
                  90000 12231
                </h1>
                <Image
                  alt='img'
                  width={0}
                  height={0}
                  src='/assests/login/edit.svg'
                  className=' w-[8px] lg:w-[11px] xl:w-[12px] ml-[2%] mt-[-2px]'
                />
              </div>
            </div>
           

            <div className=' flex justify-center   mt-[35px] md:mt-[40px] lg:mt-[56px] xl:mt-[65px]     '>
              <OtpInput length={4} />
            </div>

            <div className='flex justify-center mt-[20px] md:mt-[25px] lg:mt-[40px] xl:mt-[50px]'>
              <h1 className=' text-[10px] lg:text-[13px] xl:text-[14px] text-center  font-medium'>
                <span className='text-[#AEAEAE]'>Resend in </span> 48 Sec.
              </h1>
            </div>
            <div className='mt-[27px] md:mt-[30px] lg:mt-[50px] xl:mt-[60px]'>
              <button
                id='gradientbg'
                onClick={
                  activeTab >= 3
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[20px] lg:rounded-[24px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
              >
               
              
                  Confirm
             
              </button>
            </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
          <div className='py-[10px]'>
            <div className=''>
              <h1 className='text-[15px] lg:text-[20px] xl:text-[24px] font-semibold text-center'>
                Set Your Password
              </h1>
            </div>
            <div className='flex  place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[25px] md:mt-[30px] lg:mt-[46px] xl:mt-[55px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[15px] '>
              <input
                type='password'
                name='password'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px]  '
                placeholder='Choose Password'
              />
            </div>

            <div className='flex  place-items-center w-[100%]  h-[35px] lg:h-[40px] xl:h-[50px] mt-[7px] lg:mt-[10px] xl:mt-[15px] border-[1px] border-[#E6E6E6] hover:border-[black] rounded-[100px] px-[15px] '>
              <input
                type='password'
                name='conpassword'
                className='outline-none w-[100%] text-[12px] lg:text-[14px]  xl:text-[16px]  '
                placeholder='Confirm Password'
              />
            </div>
            <div className='flex justify-center mt-[20px] lg:mt-[25px] xl:mt-[30px] 2xl:mt-[40px]'>
              <h1 className=' text-[8px] lg:text-[9px] xl:text-[10px] text-center w-[180px] lg:w-[200px] xl:w-[220px] font-normal text-[black]'>
                Hints :
                <span className='text-[#878787]'>
                  {' '}
                  Must be 6-8 characters long, including numbers and letters
                </span>
              </h1>
            </div>

            <div className='mt-[15px] md:mt-[25px] lg:mt-[30px] xl:mt-[40px]'>
                <Link href="/seller-admin">
              <button
                id='gradientbg'
               
                className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[20px] lg:rounded-[24px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
              >
               
               
               Continue
               
              </button>
              </Link>
            </div>
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
  <button className="px-[30px] h-[35px] lg:h-[45px] xl:h-[50px] bg-[black]  rounded-full text-[10px] lg:text-[12px] xl:text-[14px] text-[white] cursor-pointer">Join Us Now</button>
            </DialogTrigger>
            <DialogContent showCancelIcon = {false} className='w-[90%] md:w-[320px]  lg:w-[390px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
                 <div className="w-[100%] h-[100%] px-[40px] lg:px-[50px] xl:px-[60px] py-[20px] lg:py-[25px] xl:py-[30px] ">
                      {renderTabContent()}
                 </div>
                 </DialogContent>
                 </Dialog>
                 </div>
   </>
  )
}

export default SignupSeller
