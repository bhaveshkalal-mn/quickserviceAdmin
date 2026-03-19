
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
    {
      id: '1',
      invoiceid: 'INV-1001',
      orderid:'ORD1234',
      seller: 'Seller A',
      buyer: 'Amit Kumar',
      date: '01-02-2025',
     amount: '₹4,500',
     commission: '₹200',
     payable: '₹4,300',
     status:  'Paid',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      invoiceid: 'INV-1001',
      orderid:'ORD1234',
      seller: 'Seller B',
      buyer: 'Amit Kumar',
      date: '01-02-2025',
     amount: '₹4,500',
     commission: '₹200',
     payable: '₹4,300',
     status:  'Paid',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
      invoiceid: 'INV-1001',
      orderid:'ORD1234',
      seller: 'Seller C',
      buyer: 'Amit Kumar',
      date: '01-02-2025',
     amount: '₹4,500',
     commission: '₹200',
     payable: '₹4,300',
     status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '4',
      invoiceid: 'INV-1001',
      orderid:'ORD1234',
      seller: 'Seller D',
      buyer: 'Amit Kumar',
      date: '01-02-2025',
     amount: '₹4,500',
     commission: '₹200',
     payable: '₹4,300',
     status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '5',
      invoiceid: 'INV-1001',
      orderid:'ORD1234',
      seller: 'Seller E',
      buyer: 'Amit Kumar',
      date: '01-02-2025',
     amount: '₹4,500',
     commission: '₹200',
     payable: '₹4,300',
     status:  'Paid',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
 {
      accessorKey: 'invoiceid',
      header: 'Invoice ID'
    },
    {
      accessorKey: 'orderid',
      header: 'Order ID'
    },
    
     {
      accessorKey: 'seller',
      header: 'Seller'
    },
    {
      accessorKey: 'buyer',
      header: 'Buyer'
    },
    {
      accessorKey: 'date',
      header: 'Invoice Date'
    },
    {
      accessorKey: 'amount',
      header: 'Amount'
    },
    {
      accessorKey: 'commission',
      header: 'Commissions'
    },
    {
      accessorKey: 'payable',
      header: 'Payable to Seller'
    },
    
   
     {
      accessorKey: 'status',
      header: ' Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/sales/invoices/details">
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
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Invoices'}  />

      
    </div>
  )
}

export default page


