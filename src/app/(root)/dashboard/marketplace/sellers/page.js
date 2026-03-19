
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
     {
      id: '1',
      sellerid:'SLR-1001',
      name: 'TrendyMart',
      owner: 'Amit Verma',
      category: 'Fashion',
      product: '300',
      order: '4,120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      sellerid:'SLR-1001',
      name: 'TrendyMart',
      owner: 'Amit Verma',
      category: 'Fashion',
      product: '300',
      order: '4,120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      sellerid:'SLR-1001',
      name: 'TrendyMart',
      owner: 'Amit Verma',
      category: 'Fashion',
      product: '300',
      order: '4,120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      sellerid:'SLR-1001',
      name: 'TrendyMart',
      owner: 'Amit Verma',
      category: 'Fashion',
      product: '300',
      order: '4,120',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      sellerid:'SLR-1001',
      name: 'TrendyMart',
      owner: 'Amit Verma',
      category: 'Fashion',
      product: '300',
      order: '4,120',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [

    {
      accessorKey: 'sellerid',
      header: 'Seller ID'
    },
     {
      accessorKey: 'name',
      header: 'Store Name'
    },
    {
      accessorKey: 'owner',
      header: 'Owner'
    },
   
    
    {
      accessorKey: 'category',
      header: 'Category'
    },
    {
      accessorKey: 'product',
      header: 'Products'
    },
    {
      accessorKey: 'order',
      header: 'Orders'
    },
    
   
     {
      accessorKey: 'status',
      header: 'Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/marketplace/sellers/details">
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
      <ReusableTable Route={"/dashboard/marketplace/sellers/sellerinfo"} showIcon={true} data={data} columns={columns} filterColumn=' reviews' title={'Sellers'}  />

      
    </div>
  )
}

export default page


