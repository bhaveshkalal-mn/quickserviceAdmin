
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
    {
      id: '1',
      date: '01-02-2025',
      customer: 'Amit Kumar',
      product: 'Designer Traditional Dress',
      ratings: '/assests/selleradmin/icon/rating.svg',
      review: '"Great sound quality!"',
      status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
     date: '01-02-2025',
      customer: 'Amit Kumar',
      product: 'Designer Traditional Dress',
      ratings: '/assests/selleradmin/icon/rating.svg',
      review: '"Great sound quality!"',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      date: '01-02-2025',
      customer: 'Amit Kumar',
      product: 'Designer Traditional Dress',
      ratings: '/assests/selleradmin/icon/rating.svg',
      review: '"Great sound quality!"',
      status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      date: '01-02-2025',
      customer: 'Amit Kumar',
      product: 'Designer Traditional Dress',
      ratings: '/assests/selleradmin/icon/rating.svg',
      review: '"Great sound quality!"',
      status:  'Pending',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      date: '01-02-2025',
      customer: 'Amit Kumar',
      product: 'Designer Traditional Dress',
      ratings: '/assests/selleradmin/icon/rating.svg',
      review: '"Great sound quality!"',
      status:  'Approved',
      show:  '/assests/selleradmin/icon/righticon.svg'
    }
  ]

  const columns = [
   
    {
      accessorKey: 'date',
      header: 'Date'
    },
    {
      accessorKey: 'customer',
      header: 'Customer'
    },
    {
      accessorKey: 'product',
      header: 'Product'
    },
    {
      accessorKey: 'ratings',
      header: 'Ratings',
       cell: ({ row }) => (
        <div className='h-11 flex place-items-center'>
        <img
          src={row.getValue('ratings')}
          alt='avatar'
          className='w-[160px] h-[24px] rounded-sm object-cover'
        />
        </div>
       )
    },
    {
      accessorKey: 'review',
      header: 'Review'
    },
     {
      accessorKey: 'status',
      header: 'Status'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/marketplace/reviews/viewreview">
        <img
          src={row.getValue('show')}
          alt='avatar'
          className='w-[14px] h-[14px] rounded-sm object-cover'
        />
        </Link>
      )
    },
  ]
  return (
    <div className='px-[2%]'>
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Products Reviews'}  />

      
    </div>
  )
}

export default page

