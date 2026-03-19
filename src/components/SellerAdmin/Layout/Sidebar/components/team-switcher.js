'use client'

import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import Image from 'next/image'

export function TeamSwitcher ({ teams }) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
   <SidebarMenu>
      <SidebarMenuItem>
        <div className='px-2  py-4 grid place-items-center  '>
          <div className='w-full h-full flex place-items-center'>
            <Image
              width={0}
              height={0}
              alt='img'
              className='w-[80px] md:w-[100px] lg:w-[130px] xl:w-[147px] h-[25px] lg:h-[35px] xl:h-[40px] '
              src='/assests/comman/logo.svg'
            />
          </div>
        </div>
        <div className='border-b-[1px] border-gray-100'></div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
