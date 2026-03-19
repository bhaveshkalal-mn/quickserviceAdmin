
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
    {
      id: '1',
     customerid: 'CUS-2025-001',
     name: 'Amit Kumar',
     email:'amit@gmail.com',
    orders: '5',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '2',
     customerid: 'CUS-2025-001',
     name: 'Amit Kumar',
     email:'amit@gmail.com',
    orders: '5',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
     customerid: 'CUS-2025-001',
     name: 'Amit Kumar',
     email:'amit@gmail.com',
    orders: '5',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '4',
     customerid: 'CUS-2025-001',
     name: 'Amit Kumar',
     email:'amit@gmail.com',
    orders: '5',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '5',
     customerid: 'CUS-2025-001',
     name: 'Amit Kumar',
     email:'amit@gmail.com',
    orders: '5',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'customerid',
      header: 'Customer ID'
    },
    {
      accessorKey: 'name',
      header: 'Name'
    },
    
    {
      accessorKey: 'email',
      header: 'Email'
    },
    {
      accessorKey: 'orders',
      header: 'Total Orders'
    },
     {
      accessorKey: 'status',
      header: 'Status'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/customer/customers/details">
            <div className='h-11 flex place-items-center'>
        <img
          src={row.getValue('show')}
          alt='avatar'
          className='w-[14px] h-[14px] rounded-sm object-cover'
        />
        </div>
        </Link>
      )
    },
  ]
  return (
    <div className='px-[2%]'>
      <ReusableTable  showIcon={true} data={data} columns={columns} filterColumn=' reviews' title={'Customers'}  />

      
    </div>
  )
}

export default page

