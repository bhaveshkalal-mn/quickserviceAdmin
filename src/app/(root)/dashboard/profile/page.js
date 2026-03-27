import ChangePassword from '@/components/model/ChangePassword'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="grid place-items-center ">
      <div className="max-w-screen-2xl w-full">
         <div className="w-[100%]  px-[2%]   md:pb-[0px]">
            <div className="flex h-[40px]  items-center ">
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                My Profile
                </h1>
              </div>
              </div>
              <div className="mt-[20px] rounded-[6px]  border-[1px] border-[#EBEBEB]">
                <div className='py-[30px] xl:py-[40px] px-[40px] xl:px-[50px]'>
                  <div>
                    <Image alt='img' width={0} height={0} className='w-[40px] lg:w-[50px] xl:w-[64px] h-[40px] lg:h-[50px] xl:h-[64px]'  src='/assests/comman/login.svg'/>
                    <div className='flex gap-x-[20px] place-items-end mt-[15px] lg:mt-[20px] xl:mt-[25px]'>
                      <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-bold'>Jit Shrimali</h1>
                      <h1 className='text-[12px] lg:text-[14px] xl:text-[16px]   font-medium text-[#7C7C7C]'>Emp ID : 1002</h1>
                    </div>
                  </div>
                  <div className='w-[100%] h-[1px] bg-[#EBEBEB] mt-[20px] lg:mt-[25px] xl:mt-[30px]'></div>
                  
                    <div className='grid grid-cols-2 mt-[25px] lg:mt-[30px] xl:mt-[35px] gap-y-[30px] lg:gap-y-[40px] xl:gap-y-[50px]'>
                      <div>
                        <p className='text-[11px] xl:text-[12px] font-normal'>Username</p>
                        <h1 className='text-[14px] lg:text-[15px] xl:text-[16px] font-medium'>jit.shrimali</h1>
                      </div>
                      <div>
                        <p className='text-[11px] xl:text-[12px] font-normal'>Assigned As</p>
                        <h1 className='text-[14px] lg:text-[15px] xl:text-[16px] font-medium'> Admin</h1>
                      </div>
                      <div>
                        <p className='text-[11px] xl:text-[12px] font-normal'>Email </p>
                        <h1 className='text-[14px] lg:text-[15px] xl:text-[16px] font-medium'>jit.shrimali@mntechgroup.com</h1>
                      </div>
                      <div className='flex place-items-center gap-x-[20px]'>
                        <div>
                        <p className='text-[11px] xl:text-[12px] font-normal'>Password</p>
                        <h1 className='text-[14px] lg:text-[15px] xl:text-[16px] font-medium'>*********</h1>
                        </div>
                       <ChangePassword/>
                        </div>
                        </div>
                        </div>
                        </div>
         </div>
        </div>
      
    </div>
  )
}

export default page
