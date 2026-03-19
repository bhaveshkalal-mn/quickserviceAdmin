
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
    {
      id: '1',
      refundid: 'RF-2025-001',
      orderid:'ORD1234',
     amount: '₹1,200',
     reason: 'Damaged item',
     status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '2',
      refundid: 'RF-2025-001',
      orderid:'ORD1234',
     amount: '₹1,200',
     reason: 'Late Delivery',
     status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
      refundid: 'RF-2025-001',
      orderid:'ORD1234',
     amount: '₹1,200',
     reason: 'Damaged item',
     status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '4',
      refundid: 'RF-2025-001',
      orderid:'ORD1234',
     amount: '₹1,200',
     reason: 'Damaged item',
     status:  'Rejected',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '5',
      refundid: 'RF-2025-001',
      orderid:'ORD1234',
     amount: '₹1,200',
     reason: 'Damaged item',
     status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [
 {
      accessorKey: 'refundid',
      header: 'Refund ID'
    },
    {
      accessorKey: 'orderid',
      header: 'Order ID'
    },
    {
      accessorKey: 'amount',
      header: 'Refund Amount'
    },
    {
      accessorKey: 'reason',
      header: 'Reason'
    },
     {
      accessorKey: 'status',
      header: ' Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/sales/refunds/details">
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
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Refunds'}  />

      
    </div>
  )
}

export default page


