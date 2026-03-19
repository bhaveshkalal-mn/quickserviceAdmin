
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
    {
      id: '1',
      shipmentid: 'SHP12345',
      orderid:'ORD1234',
      seller: 'Seller A',
      buyer: 'Amit Kumar',
      partner: 'Delhivery',
      number: 'DL123456789',
      status:  'In Transit',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      shipmentid: 'SHP12345',
      orderid:'ORD1234',
      seller: 'Seller B',
      buyer: 'Amit Kumar',
      partner: 'Delhivery',
      number: 'DL123456789',
      status:  'In Transit',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      shipmentid: 'SHP12345',
      orderid:'ORD1234',
      seller: 'Seller C',
      buyer: 'Amit Kumar',
      partner: 'Delhivery',
      number: 'DL123456789',
      status:  'In Transit',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      shipmentid: 'SHP12345',
      orderid:'ORD1234',
      seller: 'Seller D',
      buyer: 'Amit Kumar',
      partner: 'Delhivery',
      number: 'DL123456789',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      shipmentid: 'SHP12345',
      orderid:'ORD1234',
      seller: 'Seller E',
      buyer: 'Amit Kumar',
      partner: 'Delhivery',
      number: 'DL123456789',
      status:  'Delivered',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [
 {
      accessorKey: 'shipmentid',
      header: 'Shipment ID'
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
      accessorKey: 'partner',
      header: 'Courier Partner'
    },
    {
      accessorKey: 'number',
      header: 'Tracking Number'
    },
    
   
     {
      accessorKey: 'status',
      header: ' Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/sales/shipments/details">
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
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Shipments'}  />

      
    </div>
  )
}

export default page


