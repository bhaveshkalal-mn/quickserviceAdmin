
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
     {
      id: '1',
      attributeid: 'CAT-001',
      attribute: 'Color',
     category:'T-shirts',
    values: 'Red',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      attributeid: 'CAT-001',
      attribute: 'Size',
     category:'T-shirts',
    values: 'Red',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      attributeid: 'CAT-001',
      attribute: 'Women',
     category:'T-shirts',
    values: 'Blue',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
      attributeid: 'CAT-001',
      attribute: 'Weight',
     category:'T-shirts',
    values: 'Red',
      status:  'Inactive',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
      attributeid: 'CAT-001',
      attribute: 'Material',
     category:'T-shirts',
    values: 'Green',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'attributeid',
      header: 'Attribute ID'
    },
    {
      accessorKey: 'attribute',
      header: 'Attribute'
    },
    {
      accessorKey: 'category',
      header: 'Category'
    },
    {
      accessorKey: 'values',
      header: 'Values'
    },
     {
      accessorKey: 'status',
      header: 'Status'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        
            <div className='h-11 flex place-items-center'>
        <img
          src={row.getValue('show')}
          alt='avatar'
          className='w-[14px] h-[14px] rounded-sm object-cover'
        />
        </div>
        
      )
    },
  ]
  return (
    <div className='px-[2%]'>
      <ReusableTable Route={"/dashboard/catalogue/attributes/newattributes"} showIcon={true} data={data} columns={columns} filterColumn=' reviews' title={'Attributes'}  />

      
    </div>
  )
}

export default page

