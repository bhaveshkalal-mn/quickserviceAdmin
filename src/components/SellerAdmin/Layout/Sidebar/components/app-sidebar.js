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
      url: '/dashboard/settings',
      icon: '/assests/admin/sidebaricon/setting.svg'
    },
  ],
  navMain: [
    
    {
      name: 'Sales',
      url: '/dashboard/sales',
      icon: '/assests/selleradmin/sidebaricon/sales.svg',
      items: [
        {
          name: 'Orders',
          url: '/dashboard/sales/orders'
        },
        {
          name: 'Shipments',
          url: '/dashboard/sales/shipments'
        },
        {
          name: 'Invoices',
          url: '/dashboard/sales/invoices'
        },
        {
          name: 'Refunds',
          url: '/dashboard/sales/refunds'
        },
        {
          name: 'Transaction',
          url: '/dashboard/sales/transactions'
        },
      ]
    },
    {
      name: 'Marketplace',
      url: '/dashboard/marketplace',
      icon: '/assests/selleradmin/sidebaricon/market.svg',
      items: [
         {
          name: 'Sellers',
          url: '/dashboard/marketplace/sellers'
        },
        {
          name: 'Products',
          url: '/dashboard/marketplace/products'
        },
        {
          name: 'Payment Requests',
          url: '/dashboard/marketplace/paymentrequest'
        },
        {
          name: 'Product Review',
          url: '/dashboard/marketplace/reviews'
        },
        {
          name: 'Seller Review',
          url: '/dashboard/marketplace/sellerreview'
        },
        {
          name: 'Flag Reason',
          url: '/dashboard/marketplace/flagreason'
        },
        {
          name: 'Inventory Source',
          url: '/dashboard/marketplace/source'
        },
        
      ]
    },
    {
      name: 'Catalogue',
      url: '/dashboard/catalogue',
      icon: '/assests/selleradmin/sidebaricon/catalogue.svg',
      items: [
       {
          name: 'Products',
          url: '/dashboard/catalogue/products'
        },
        {
          name: 'Categories',
          url: '/dashboard/catalogue/categories'
        },
        {
          name: 'Attributes',
          url: '/dashboard/catalogue/attributes'
        },
        
      ]
    },
    {
      name: 'Customers',
      url: '/dashboard/customer',
      icon: '/assests/selleradmin/sidebaricon/customers.svg',
      items: [
        {
          name: 'Customers',
          url: '/dashboard/customer/customers'
        },
        {
          name: 'Groups',
          url: '/dashboard/customer/groups'
        },
         {
          name: 'Reviews',
          url: '/dashboard/customer/reviews'
        },
         {
          name: 'GDPR Requests',
          url: '/dashboard/customer/request'
        },
        
      ]
    },
    
    
  ],
    
   project: [
    {
      name: 'CMS',
      url: '/dashboard/cms',
      icon: '/assests/selleradmin/sidebaricon/cms.svg'
    },
    {
      name: 'Marketing',
      url: '/dashboard/marketing',
      icon: '/assests/selleradmin/sidebaricon/marketing.svg'
    },
    {
      name: 'Reporting',
      url: '/dashboard/reports',
      icon: '/assests/selleradmin/sidebaricon/reporting.svg'
    },
    {
      name: 'Setting',
      url: '/dashboard/settings',
      icon: '/assests/selleradmin/sidebaricon/setting.svg'
    },
    {
      name: 'Configure',
      url: '/dashboard/configure',
      icon: '/assests/selleradmin/sidebaricon/setting.svg'
    },
    
  ]
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
        <NavMain items={data.navMain} />
        {/* Use for seperate section (For single Section)  */}
        <NavProjects projects={data.project} />
          <div className='border-b-[1px] border-gray-100 mt-[10px]'></div>
      <h1 className='group-data-[collapsible=icon]:hidden mt-[10px] text-[11px] xl:text-[12px] px-[5px] xl:px-[8px]'>
        © 2023 MN Techgroup. All rights reserved
      </h1>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
