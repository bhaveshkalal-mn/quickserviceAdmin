import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
   <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
              Settings
                </h1>
              </div>
             <div className='mt-[30px] xl:mt-[40px]'>
              <div className='grid grid-cols-2 gap-[10px] xl:gap-[15px]'>
                 <Link href="/dashboard/settings/inventory">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] cursor-pointer border-[#EBEBEB] rounded-[6px] hover:bg-[#FDF8FF]'>
                   
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px] '>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/store.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Inventory Sources</h1>
                    </div>
                   
                  </div>
                   </Link>
                   <Link href="/dashboard/settings/channels">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] cursor-pointer border-[#EBEBEB] rounded-[6px] hover:bg-[#FDF8FF]'>
                    
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px] '>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/shipping.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Channels</h1>
                    </div>
                    
                  </div>
                  </Link>
                   <Link href="/dashboard/settings/users">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] border-[#EBEBEB] cursor-pointer rounded-[6px] hover:bg-[#FDF8FF]'>
                   
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px]'>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/payment.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Users</h1>
                    </div>
                  
                  </div>
                    </Link>
                     <Link href="/dashboard/settings/roles">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] border-[#EBEBEB] cursor-pointer rounded-[6px] hover:bg-[#FDF8FF]'>
                    
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px]'>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/notification.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Roles</h1>
                    </div>
                   
                  </div>
                   </Link>
                   <Link href="/dashboard/settings/taxes">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] border-[#EBEBEB] cursor-pointer rounded-[6px] hover:bg-[#FDF8FF]'>
                     
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px]'>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/privacy.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Taxes</h1>
                    </div>
                   
                  </div>
                   </Link>
                    <Link href="/dashboard/settings/datatransfer">
                  <div className='w-[100%] h-[60px] lg:h-[75px] xl:h-[85px] flex place-items-center border-[1px] border-[#EBEBEB] cursor-pointer rounded-[6px] hover:bg-[#FDF8FF]'>
                    
                    <div className='px-[15px] lg:px-[20px] flex place-items-center gap-x-[15px] lg:gap-x-[20px]'>
                        <Image
                        alt='store'
                        width={0}
                        height={0}
                        className='w-[28px] lg:w-[30px] xl:w-[34px] h-[28px] lg:h-[30px] xl:h-[34px]'
                        src="/assests/selleradmin/setting/inventory.svg"
                        />
                        <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>Data Trasfers</h1>
                    </div>
                    
                  </div>
                  </Link>
              </div>
              </div>
              </div>
              </div>
              </div>
   </>
  )
}

export default page
