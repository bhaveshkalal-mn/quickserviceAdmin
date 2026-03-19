
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
   
     {
      id: '1',
      orderid:'ORD1234',
      seller: 'Seller A',
      buyer: 'Amit Kumar',
     amount: '₹1,000',
     commission: '₹200',
     payable: '₹800',
      date: '01-02-2025',
     status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      orderid:'ORD1234',
      seller: 'Seller B',
      buyer: 'Amit Kumar',
     amount: '₹1,000',
     commission: '₹200',
     payable: '₹800',
      date: '01-02-2025',
     status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      orderid:'ORD1234',
      seller: 'Seller C',
      buyer: 'Amit Kumar',
     amount: '₹1,000',
     commission: '₹200',
     payable: '₹800',
      date: '01-02-2025',
     status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      orderid:'ORD1234',
      seller: 'Seller D',
      buyer: 'Amit Kumar',
     amount: '₹1,000',
     commission: '₹200',
     payable: '₹800',
      date: '01-02-2025',
     status:  'paid',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      orderid:'ORD1234',
      seller: 'Seller E',
      buyer: 'Amit Kumar',
     amount: '₹1,000',
     commission: '₹200',
     payable: '₹800',
      date: '01-02-2025',
     status:  'paid',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
 
    {
      accessorKey: 'orderid',
      header: 'Order ID'
    },
    
     {
      accessorKey: 'seller',
      header: 'Seller Name'
    },
    {
      accessorKey: 'buyer',
      header: 'Buyer'
    },
    {
      accessorKey: 'amount',
      header: 'Requested Amount'
    },
    {
      accessorKey: 'commission',
      header: 'Commissions'
    },
    {
      accessorKey: 'payable',
      header: 'Net Payable'
    },
    {
      accessorKey: 'date',
      header: 'Request Date'
    },
    
   
     {
      accessorKey: 'status',
      header: ' Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/marketplace/paymentrequest/details">
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
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Payment Requests'}  />

      
    </div>
  )
}

export default page


