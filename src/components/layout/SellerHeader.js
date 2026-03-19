import Link from 'next/link'
import React from 'react'
import Notification from '../model/Notification'
import Image from 'next/image'
import { SidebarTrigger } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useRouter } from 'next/navigation'

function SellerHeader() {
   const router = useRouter();
  return (
    <div className='w-[100%]  bg-[white] ' >
      <div className=' h-full flex place-items-center justify-between'>
        <div className='flex gap-x-[20px] place-items-center '>
         
          <SidebarTrigger className='' />
        </div>
        
            <div className='flex  gap-x-[10px] lg:gap-x-[15px] xl:gap-x-[20px]   h-[25px] lg:h-[35px] xl:h-[40px] place-items-center justify-end w-fit '>
           

           
            
             <div className='p-[5px]   hover:bg-[#F2F7FF] cursor-pointer rounded-full '>
              <Notification />
            </div>
             <div className='p-[6px]  hover:bg-[#F2F7FF] cursor-pointer rounded-full'>
                           <DropdownMenu>
                             <DropdownMenuTrigger asChild>
                               <Image
                                 width={0}
                                 height={0}
                                 alt='img'
                                 className='w-[22px] lg:w-[25px]  cursor-pointer'
                                 src='/assests/comman/login.svg'
                               />
                             </DropdownMenuTrigger>
             
                             <DropdownMenuContent
                               id='boxshadow2'
                               className='w-20 py-[10px] mt-[8px] border-none hidden md:block'
                               align='end'
                             >
                               
                               
                               <DropdownMenuGroup className=' py-[2px] xl:py-[5px]'>
                                <DropdownMenuItem>
                                  
                                     <div  onClick={() => router.push("/login")} className='flex place-items-center gap-x-[7px] xl:gap-x-[10px] px-[3px] cursor-pointer'>
                                       <div className='w-[14px] lg:w-[16px]'>
                                         <Image
                                           alt='img'
                                           width={0}
                                           height={0}
                                           className='w-[12px] xl:w-[16px] h-[14px] xl:h-[16px]'
                                           src='/assests/selleradmin/sidebaricon/profile.svg'
                                         />
                                       </div>
             
                                       <h1 className='text-[12px] lg:text-[13px] xl:text-[14px] font-normal '>
                                        Profile
                                       </h1>
                                     </div>
                                  
                                 </DropdownMenuItem>
                                 <DropdownMenuItem>
                                  
                                     <div  onClick={() => router.push("/login")} className='flex place-items-center gap-x-[7px] xl:gap-x-[10px] px-[3px] mt-[2px] cursor-pointer'>
                                       <div className='w-[14px] lg:w-[16px]'>
                                         <Image
                                           alt='img'
                                           width={0}
                                           height={0}
                                           className='w-[12px] xl:w-[16px] h-[14px] xl:h-[16px]'
                                           src='/assests/selleradmin/comman/logout.svg'
                                         />
                                       </div>
             
                                       <h1 className='text-[12px] lg:text-[13px] xl:text-[14px] font-normal '>
                                         Logout
                                       </h1>
                                     </div>
                                  
                                 </DropdownMenuItem>
                                 </DropdownMenuGroup>
                                 </DropdownMenuContent>
                                 </DropdownMenu>
                  </div>
        </div>
        </div>
       
        </div>
        
  )
}

export default SellerHeader
