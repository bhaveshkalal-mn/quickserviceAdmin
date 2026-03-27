"use client"
import DataTable from '@/components/Admin/module/DataTable'
import Image from 'next/image'
import React from 'react'



function page() {
  const data = [
    {
      id: '1',
    no: '1',
      sent: 'All Users',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '2',
    no: '2',
      sent: 'All Users',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '3',
    no: '3',
      sent: 'Premium Members',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Scheduled',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '4',
    no: '4',
      sent: 'Premium Members',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '5',
    no: '5',
      sent: 'Premium Members',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '6',
    no: '6',
      sent: 'Premium Members',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
     {
      id: '7',
    no: '7',
      sent: 'All Users',
      subject: 'New Discounts on Subscription',
       template: 'Sign Up Template',
        status: 'Sent',
      delete: '/assests/comman/delete.svg'
    },
      
     
  ]

  const columns = [
     {
      accessorKey: 'no',
      header: 'ID No'
    },
    {
      accessorKey: 'sent',
      header: 'Sent To'
    },
    {
      accessorKey: 'subject',
      header: 'Subject'
    },
    {
      accessorKey: 'template',
      header: 'Template'
    },
     {
      accessorKey: 'status',
      header: 'Status',
      
      
    },
    {
      accessorKey: 'delete',
      header: 'Action',
      cell: ({ row }) => (
        <img
          src={row.getValue('delete')}
          alt='avatar'
          className='w-[24px] h-[24px]  cursor-pointer'
        />
      )
     
    }
  ]
     
  return (
   <>
   <div className='px-[2%]'>
         <div className='flex justify-between place-items-center'>
                       <p className='text-[16px] lg:text-[18px] xl:text-[20px] font-normal'>
                   Emails
                       </p>
                    
                       <Image
                       alt='add'
                       width={0}
                       height={0}
                       className='w-[20px] xl:w-[22px] cursor-pointer'
                       src="/assests/comman/add.svg"
                       />
                      
                       </div>
                          <div>
            <DataTable data={data} columns={columns} />
          </div>
                          </div>
   </>
  )
}

export default page
