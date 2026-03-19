
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
    {
      id: '1',
      flagid: 'ORD1234',
      type: 'Product',
      reason:'Fake Product',
     date: '01-02-2025',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      flagid: 'ORD1234',
      type: 'Seller',
      reason:'Fake Product',
     date: '01-02-2025',
      status:  'Resolved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      flagid: 'ORD1234',
      type: 'Buyer',
      reason:'Fake Product',
     date: '01-02-2025',
      status:  'Rejected',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      flagid: 'ORD1234',
      type: 'Order',
      reason:'Fake Product',
     date: '01-02-2025',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      flagid: 'ORD1234',
      type: 'Review',
      reason:'Fake Product',
     date: '01-02-2025',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'flagid',
      header: 'Flag ID'
    },
    {
      accessorKey: 'type',
      header: 'Entity Type'
    },
    {
      accessorKey: 'reason',
      header: 'Reason'
    },
    {
      accessorKey: 'date',
      header: 'Date'
    },
    
     {
      accessorKey: 'status',
      header: 'Status'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/marketplace/flagreason/editreason">
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
      <ReusableTable  showIcon={true} data={data} columns={columns} filterColumn=' reviews' title={'Flag Reason'}  />

      
    </div>
  )
}

export default page

