'use client'

import { Folder, Forward, MoreHorizontal, Trash2 } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function NavProjects ({ projects }) {
    const pathname = usePathname();
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Projects</SidebarGroupLabel> */}
      <SidebarMenu>
        {projects.map(item => (
          <SidebarMenuItem
            className={ `${pathname === item.url ? "bg-[#FDF8FF]" : "hover:bg-[#FDF8FF]" }  xl:py-1`}
            key={item.name}
          >
            <SidebarMenuButton asChild className={''}>
              <Link href={item.url}>
                {/* <item.icon /> */}
                <div className='w-[20px]'>
                  <Image
                    height={20}
                    width={20}
                    src={item?.icon}
                    className='w-auto h-auto '
                  />
                </div>
                <span className='group-data-[collapsible=icon]:hidden'>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      
    </SidebarGroup>
  )
}
