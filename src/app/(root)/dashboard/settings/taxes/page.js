import Link from 'next/link'
import React from 'react'

function page() {
  return (
     <div className='w-full px-[2%]'>
        <div className='pb-[50px]'>
          
            <div className='flex gap-x-[20px] place-items-center '>
              <Link href='/dashboard/settings'>
                <h1 className='text-[18px] lg:text-[20px] font-normal text-[#b5b2b2]'>
                  Settings
                </h1>
              </Link>
              <h1 className='text-[16px] lg:text-[18px] text-[#C5C5C5] font-normal'>
                /
              </h1>
              <h1 className='text-[18px] lg:text-[20px] font-normal'>
             Taxes
              </h1>
            </div>
            <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[19px] lg:mt-[28px] px-[15px] xl:px-[20px] py-[15px] xl:py-[20px] h-[300px]'>

            </div>
            </div>
            </div>
  )
}

export default page
