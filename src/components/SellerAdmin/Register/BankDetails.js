"use client"
import Image from 'next/image';
import React, { useState } from 'react'

function BankDetails() {
     const [display , setDisplay] = useState(false);
  return (
    
       <div  id="boxshadow3" className='w-[100%] rounded-[10px] lg:rounded-[14px]'>
      <div
       
        className=" px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]"
      >
        <h1 className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]">
         Bank Details
        </h1>
        <h1 className="mt-[2px] text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
         To verify your bank successfully, ensure the account name matches the registered GSTIN name.
        </h1>
        <div className="mt-[20px] xl:mt-[30px]">
             { display?
            null : 
            <div>
          <div className="flex place-items-center w-[100%] ">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
               <span className='text-[red]'>*</span>Bank Account Number
              </h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter Bank Account Number"
              />
            </div>
          </div>
          <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal"><span className='text-[red]'>*</span>IFSC Code</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter IFSC Code"
              />
            </div>
          </div>

           
          <div className=" flex justify-end mt-[15px] xl:mt-[20px]">
            <button onClick={() => setDisplay(!display)} className="px-[15px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer">
            Submit
            </button>
          </div>
          </div>
}
          
                      { display? <div className='w-[100%]'>
                              <div className='flex gap-x-[10px] place-items-center'>
                                   <Image
                                                alt="img"
                                                width={0}
                                                height={0}
                                                src="/assests/becomeseller/greentick.svg"
                                                className="w-[12px] lg:w-[14px] xl:w-[16px] h-[12px] lg:h-[14px] xl:h-[16px]"
                                              />
                                  <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
                                              Your  Bank Details is verified
                                              </h1>
                                             
                              </div>
                               <div className='mt-[15px] xl:mt-[20px] bg-[#FBF3FF] rounded-[10px] lg:rounded-[14px] p-[20px]'>
                                  <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>Jit Trading Company</h1>
                                   <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>39954218712</h1>
                                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>SBIN0001045</h1>
                                   
          
                               </div>
                           </div>
                           : null
                      }
        </div>
        
      </div>
      <div className='w-[100%] h-[1px] bg-[#E3E3E3]'></div>
      <div
       
        className=" px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]"
      >
        <h1 className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]">
       Penny Transfer Confirmation
        </h1>
        <h1 className="mt-[2px] text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
        Enter the Trendigo penny amount credited to your share account on July 09, 2025.
        </h1>
        <div className="mt-[20px] xl:mt-[30px]">
          <div className="flex place-items-center w-[100%] ">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
               Enter Received Amount
              </h1>
            </div>
          <div className='flex w-[100%] gap-x-[20px]'>
            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Eg. 1.32"
              />
              
            </div>
             <button className="px-[15px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer">
           Confirm
            </button>
            </div>
          </div>
          </div>
          </div>
    </div>
   
  )
}

export default BankDetails
