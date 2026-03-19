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
                       
                     </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-[5px] xl:my-[10px]" />
                        
                      
                  </DropdownMenuGroup>
                 
                  </DropdownMenuContent>
                  </DropdownMenu>
    </div>
  )
}

export default Notification
