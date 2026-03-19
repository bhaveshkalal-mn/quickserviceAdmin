
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
   
    {
      id: '1',
      name: 'Main Warehouse',
      type: 'Warehouse',
      location: 'Delhi, India',
      person: 'Ramesh Kumar',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '1',
      name: 'Mumbai Store',
      type: 'Retail Store',
      location: 'Mumbai, India',
      person: 'Priya Mehta',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '1',
      name: 'Vendor Dropship',
      type: 'Supplier',
      location: 'Bangalore, India',
      person: 'Vendor Support',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [

    
     {
      accessorKey: 'name',
      header: 'Source Name'
    },
    {
      accessorKey: 'type',
      header: 'Type'
    },
   
    
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'person',
      header: 'Contact Person'
    },
   
    
   
     {
      accessorKey: 'status',
      header: 'Status'
    },
    
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/marketplace/source/details">
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
      <ReusableTable   data={data} columns={columns} filterColumn=' reviews' title={'Inventory Source'}  />

      
    </div>
  )
}

export default page


