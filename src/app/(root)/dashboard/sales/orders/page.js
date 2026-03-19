
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
    {
      id: '1',
      orderid:'ORD1234',
      date: '2025-06-23 07:37:51',
      buyer: 'Amit Kumar',
      seller: 'Seller A',
      qty: '2',
      amount: '₹1,000',
      payment: 'paid',
      status:  'Pending',
      commission: '₹200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '2',
      orderid:'ORD1234',
      date: '2025-06-23 07:37:51',
      buyer: 'Amit Kumar',
      seller: 'Seller B',
      qty: '2',
      amount: '₹1,000',
      payment: 'paid',
      status:  'Shipped',
      commission: '₹200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
      orderid:'ORD1234',
      date: '2025-06-23 07:37:51',
      buyer: 'Amit Kumar',
      seller: 'Seller C',
      qty: '2',
      amount: '₹1,000',
      payment: 'paid',
      status:  'Shipped',
      commission: '₹200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '4',
      orderid:'ORD1234',
      date: '2025-06-23 07:37:51',
      buyer: 'Amit Kumar',
      seller: 'Seller D',
      qty: '2',
      amount: '₹1,000',
      payment: 'paid',
      status:  'Delivered',
      commission: '₹200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '5',
      orderid:'ORD1234',
      date: '2025-06-23 07:37:51',
      buyer: 'Amit Kumar',
      seller: 'Seller E',
      qty: '2',
      amount: '₹1,000',
      payment: 'paid',
      status:  '(Cancelled)',
      commission: '₹200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [

    {
      accessorKey: 'orderid',
      header: 'Order ID'
    },
     {
      accessorKey: 'date',
      header: 'Order Date'
    },
    {
      accessorKey: 'buyer',
      header: 'Buyer'
    },
   
    
    {
      accessorKey: 'seller',
      header: 'Seller'
    },
    {
      accessorKey: 'qty',
      header: 'Qty'
    },
    {
      accessorKey: 'amount',
      header: 'Amount'
    },
    
    {
      accessorKey: 'payment',
      header: 'Payment'
    },
     {
      accessorKey: 'status',
      header: 'Order Status'
    },
    {
      accessorKey: 'commission',
      header: 'Commission'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/sales/orders/details">
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
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Orders'}  />

      
    </div>
  )
}

export default page


