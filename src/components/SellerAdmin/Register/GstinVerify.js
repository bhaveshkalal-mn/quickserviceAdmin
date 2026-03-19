"use client"
import GstVerify from '@/components/model/GstVerify'
import Image from 'next/image';
import React, { useState } from 'react'

function GstinVerify() {

    const [display , setDisplay] = useState(false);
  return (
    <>
    <div>
        <div id="boxshadow3" className='w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
           <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>GSTIN Verify</h1>
           <div className='mt-[20px] xl:mt-[30px]'>
             { display?
            null : 
            <div className='flex w-[100%] '>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] mt-[5px] lg:mt-[7px] xl:mt-[10px]'>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>GSTIN</h1>
                </div>
                <div className='w-[100%]'>
                <div className='w-[100%] flex place-items-center justify-between  h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <input
                name='name'
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal '
                placeholder='Enter GSTIN Number'
              />
            <GstVerify/>
                </div>

                <h1 className='ml-[1px] mt-[7px] text-[9px] lg:text-[10px] xl:text-[12px] font-normal '>GSTIN is Required to Sell Products on Trandigo</h1>
                </div>
            </div>
}
          <button onClick={() => setDisplay(!display)}>toggle</button>
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
                                    Your GSTIN is verified
                                    </h1>
                                   
                    </div>
                     <div className='mt-[15px] xl:mt-[20px] bg-[#FBF3FF] rounded-[10px] lg:rounded-[14px] p-[20px]'>
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold'>Jit Trading Company</h1>
                         <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>CAH393820</h1>
                          <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Proprietorship</h1>
                           <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Near Star Hotel, Sec 11, Hotel Havel. Gandhinagar. Gujarat 33943</h1>

                     </div>
                 </div>
                 : null
            }
           </div>
        </div>
    </div>
    </>
  )
}

export default GstinVerify
