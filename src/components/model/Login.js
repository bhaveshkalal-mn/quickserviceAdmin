import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import { DropdownMenuSubTrigger } from '../ui/dropdown-menu'
import LoginSlider from '../slider/LoginSlider'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import OtpInput from '../comman/OtpInput'


function Login() {

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
           <div>
                 <div className=" w-[100%] grid justify-center place-items-center mt-[20px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[60px]">
          <h1 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium">
           Login or Signup
          </h1>
          </div>
          <div className='mt-[20px] lg:mt-[25px] xl:mt-[40px] w-[100%] flex flex-col justify-center place-items-center '>
            <div className='h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] w-[100%]  md:w-[90%] xl:w-[80%]  bg-[#F8F8F8] rounded-full flex place-items-center justify-center px-[10px] lg:px-[15px] xl:px-[20px]' >
                <div className='flex justify-between place-items-center w-[16%] xl:w-[13%]  '>
                               <h1 className='text-[10px] lg:text-[14px] xl:text-[16px] font-normal'>+91</h1>
                               <div className='w-[1px] h-[13px] lg:h-[15px] xl:h-[20px] bg-[#DDD]'></div>
                              </div>
                             
                <input
      placeholder="Mobile Number"
      className=' px-[10px] lg:px-[15px] xl:px-[20px] h-[13px] lg:h-[15px] xl:h-[20px]  outline-none w-[100%] placeholder:text-[10px] lg:placeholder:text-[14px] xl:placeholder:text-[16px] font-normal text-[10px] lg:text-[14px] xl:text-[16px]'
    />
  
            </div>
            <div className='w-[100%] md:w-[90%] xl:w-[80%]'>
                <div className='flex justify-center place-items-center'>
             <button id='gradientbg'
              onClick={
                  activeTab >= 2
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                 className='mt-[13px] lg:mt-[22px] xl:mt-[30px] w-[100%] h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] cursor-pointer bg-[#F8F8F8] rounded-full hover:opacity-90 flex place-items-center justify-center font-normal text-[10px] lg:text-[14px] xl:text-[16px] text-[white]' >
               Continue
                
            </button>
            
            </div>
            <div className='mt-[13px] lg:mt-[22px] xl:mt-[30px] '>
             <h1 className='text-[9px] lg:text-[10px] xl:text-[12px] font-normal text-center'>By continuing, I agree to the <span className='text-[#9317CF]'>  Terms of Use & Privacy Policy </span></h1>
             </div>
             <div className='mt-[13px] lg:mt-[22px] xl:mt-[30px] w-[100%] h-[1px] bg-[#E5E5E5]'></div>
             <div className='mt-[13px] lg:mt-[22px] xl:mt-[30px] flex place-items-center gap-x-[10px] lg:gap-x-[20px] justify-center'>
                 <h1 className='text-[10px] lg:text-[14px] xl:text-[16px] font-normal'>or Sign In using</h1>
                 <Image
                 alt='img'
                 width={0}
                 height={0}
                 src="/assests/login/google.svg"
                 className='w-[18px] lg::w-fit h-[18px] lg:h-fit'
                 />
             </div>

             </div>
          </div>
          
             </div>
             
          </>
        )
        case 2:
        return (
          <>
            <div>
                 <div className=" w-[100%] grid justify-center place-items-center mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[60px]">
          <h1 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium">
          Enter OTP Sent to 
          </h1>
         <h1 className='text-[9px] lg:text-[13px] xl:text-[14px] font-medium '>+91 8401193087 <span className='text-[#9317CF]'> Change </span></h1>
         
          </div>
          <div className='mt-[25px] lg:mt-[40px] xl:mt-[50px] w-[100%] flex flex-col justify-center place-items-center '>
            <div className='h-[40px] lg:h-[45px] xl:h-[55px] 2xl:h-[60px] w-[100%]  md:w-[90%] xl:w-[80%]   flex place-items-center justify-center ' >
              <OtpInput/>
            </div>
            <div className='w-[100%] md:w-[90%] xl:w-[80%]'>
                <div className='flex justify-center place-items-center'>
                     <DialogClose asChild>
            <button id='gradientbg'
             
                 className='mt-[25px] lg:mt-[35px] xl:mt-[40px] w-[100%] h-[30px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]  cursor-pointer rounded-full hover:opacity-90 flex place-items-center justify-center font-normal text-[10px] lg:text-[14px] xl:text-[16px] text-[white]' >
            Verify
                
            </button>
          </DialogClose>
             
            
            </div>
            <div className='mt-[25px] lg:mt-[40px] xl:mt-[50px] '>
             <h1 className='text-[9px] lg:text-[13px] xl:text-[14px] font-normal text-center'>Resend in  <span className='text-[#9317CF]'>  0: 59</span></h1>
             </div>
             

             </div>
          </div>
          
             </div>
           
          </>
        )
    }}
  return (
   <Dialog>
      <DialogTrigger asChild>
            <DropdownMenuSubTrigger className='text-[14px] xl:text-[16px] font-semibold mb-[5px] xl:mb-[10px] cursor-pointer'>  Login or Sign Up</DropdownMenuSubTrigger>
                    
                  
      </DialogTrigger>
      <DialogContent className=' rounded-[18px] max-w-[95%] md:max-w-[55%] lg:max-w-[55%]  xl:max-w-[55%] w-full h-[78vh] md:h-[75vh] lg:h-[70vh] xl:h-[70vh] 2xl:h-[68vh] p-4   shadow-none border-0'>
        <div className=' md:flex gap-x-[20px] w-[100%]' >
            <div className='hidden md:block w-[37%] lg:w-[34%] xl:w-[34.5%] '>
                <LoginSlider/>
            </div>
          
        <div className='w-[100%]  md:w-[62%] xl:w-[65%] '>
            {renderTabContent()}
         </div>
            
        </div>
      </DialogContent>
      </Dialog>
  )
}

export default Login
