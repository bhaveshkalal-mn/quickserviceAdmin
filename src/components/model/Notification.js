import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Image from 'next/image'

function Notification() {
  return (
    <div>
       <DropdownMenu>
                <DropdownMenuTrigger asChild>
                 
              <Image
                width={0}
                height={0}
                alt="img"
                className="w-full  cursor-pointer"
                src="/assests/comman/bellicon.svg"
              />
          
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  id="boxshadow2"
                  className="w-65 lg:w-80 xl:w-90 py-[5px] mt-[10px] border-none hidden md:block"
                  align="end"
                >
                 

                 
                  <DropdownMenuGroup className="grid gap-x-2px xl:gap-y-[5px] py-[5px] xl:py-[10px]">
                     <DropdownMenuItem>
                        <div className="flex  gap-x-[20px] xl:gap-x-[25px] px-[3px]">
                          <div className="w-[30px] xl:w-[40px] h-[30px] xl:h-[40px]">
                           <div className='w-[30px] xl:w-[40px] h-[30px] xl:h-[40px] bg-[#D9D9D9] rounded-full'></div>
                            
                          </div>
                          <div>
                            <h1 className="text-[12px] lg:text-[13px] xl:text-[14px] font-normal ">
                             Get ₹20,000* worth of Times Prime Rewards with Flipkart Pay Later. Register & Access Up to ₹1 Lakh* Credit!


                            </h1>
                            <h1 className="text-[12px] lg:text-[13px] xl:text-[14px] font-normal mt-[20px] text-[#A6A4A4]">
                           09 Jul, 2024
                            </h1>
                          </div>
                        </div>
                     </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-[5px] xl:my-[10px]" />
                         <DropdownMenuItem>
                        <div className="flex  gap-x-[20px] xl:gap-x-[25px] px-[3px]">
                          <div className="w-[30px] xl:w-[40px] h-[30px] xl:h-[40px]">
                           <div className='w-[30px] xl:w-[40px] h-[30px] xl:h-[40px] bg-[#D9D9D9] rounded-full'></div>
                            
                          </div>
                          <div>
                            <h1 className="text-[12px] lg:text-[13px] xl:text-[14px] font-normal ">
                             Get ₹20,000* worth of Times Prime Rewards with Flipkart Pay Later. Register & Access Up to ₹1 Lakh* Credit!


                            </h1>
                            <h1 className="text-[12px] lg:text-[13px] xl:text-[14px] font-normal mt-[20px] text-[#A6A4A4]">
                           09 Jul, 2024
                            </h1>
                          </div>
                        </div>
                     </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-[5px] xl:my-[10px]" />
                      <div className='pb-[5px] flex justify-center'>
                         <h1 className="text-[12px] lg:text-[13px] xl:text-[14px] font-medium ">
                          Show All Notifications


                            </h1>
                      </div>
                  </DropdownMenuGroup>
                 
                  </DropdownMenuContent>
                  </DropdownMenu>
    </div>
  )
}

export default Notification
