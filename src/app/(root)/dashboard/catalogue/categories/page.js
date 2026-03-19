
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
   
    {
      id: '1',
      categoryid: 'CAT-001',
      maincategory: 'men',
     subcategory:'Western Wear',
     leafcategory: 'T-shirts',
     products: '120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '2',
      categoryid: 'CAT-001',
      maincategory: 'men',
     subcategory:'Western Wear',
     leafcategory: 'T-shirts',
     products: '120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
      categoryid: 'CAT-001',
      maincategory: 'men',
     subcategory:'Western Wear',
     leafcategory: 'T-shirts',
     products: '120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '4',
      categoryid: 'CAT-001',
      maincategory: 'men',
     subcategory:'Western Wear',
     leafcategory: 'T-shirts',
     products: '120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '5',
      categoryid: 'CAT-001',
      maincategory: 'men',
     subcategory:'Western Wear',
     leafcategory: 'T-shirts',
     products: '120',
      status:  'Active',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'categoryid',
      header: 'Category ID'
    },
    {
      accessorKey: 'maincategory',
      header: 'Main Category'
    },
    {
      accessorKey: 'subcategory',
      header: 'Sub-Category'
    },
    {
      accessorKey: 'leafcategory',
      header: 'Leaf Category'
    },
     {
      accessorKey: 'products',
      header: 'Products'
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
      <ReusableTable Route={"/dashboard/catalogue/categories/newcategories"} showIcon={true} data={data} columns={columns} filterColumn=' reviews' title={'Categories'}  />

      
    </div>
  )
}

export default page

