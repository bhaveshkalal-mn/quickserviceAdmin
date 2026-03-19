'use client'

import * as React from 'react'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from 'lucide-react'

// import { NavMain } from '@/components/nav-main'
import { NavProjects } from './nav-projects'
import { NavUser } from './nav-user'
import { TeamSwitcher } from './team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
 
  projects: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: '/assests/admin/sidebaricon/dashboard.svg'
     
    },
     {
      name: 'Users',
      url: '/dashboard/users',
      icon: '/assests/admin/sidebaricon/user.svg'
      
    },
     {
      name: 'Services',
      url: '/dashboard/services',
      icon: '/assests/admin/sidebaricon/service.svg'
      
    },
     {
      name: 'Booking',
      url: '/dashboard/booking',
      icon: '/assests/admin/sidebaricon/booking.svg'
     
    },
    {
      name: 'Revenue',
      url: '/dashboard/revenue',
      icon: '/assests/admin/sidebaricon/revenue.svg'
     
    },
   {
      name: 'Reviews',
      url: '/dashboard/reviews',
      icon: '/assests/admin/sidebaricon/review.svg'
     
    },
    {
      name: 'Email Marketing',
      url: '/dashboard/marketing',
      icon: '/assests/admin/sidebaricon/mail.svg'
     
    },
     {
      name: 'Roles',
      url: '/dashboard/role',
      icon: '/assests/admin/sidebaricon/role.svg'
     
    },
    {
      name: 'Setting',
      url: '/dashboard/setting',
      icon: '/assests/admin/sidebaricon/setting.svg'
    },
  ],
  
    
   
}

export function AppSidebar ({ ...props }) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className=' '>
        {/*(For multiple Section)  */}
        <NavProjects projects={data.projects} />
        
          <div className='border-b-[1px] border-gray-100 mt-[10px]'></div>
      <h1 className='group-data-[collapsible=icon]:hidden mt-[10px] text-[11px] xl:text-[12px] px-[5px] xl:px-[8px]'>
        © 2023 MN Techgroup. All rights reserved
      </h1>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
