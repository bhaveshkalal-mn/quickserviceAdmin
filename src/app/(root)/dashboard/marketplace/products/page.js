'use client'
import DeleteProduct from '@/components/model/DeleteProduct'
import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import React from 'react'

function page () {
  const data = [
    {
      id: '1',
      image: '/assests/selleradmin/comman/modelimg.svg',
      namesku: 'Blue T-Shirt (TS001)',
      category: 'Fashion → Men',
      stock: '120',
      price: '₹1,000',
      status: 'active',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '2',
      image: '/assests/selleradmin/comman/modelimg.svg',
      namesku: 'Blue T-Shirt (TS001)',
      category: 'Fashion → Men',
      stock: '120',
      price: '₹1,000',
      status: 'active',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '3',
      image: '/assests/selleradmin/comman/modelimg.svg',
      namesku: 'Blue T-Shirt (TS001)',
      category: 'Fashion → Men',
      stock: '120',
      price: '₹1,000',
      status: 'active',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '4',
      image: '/assests/selleradmin/comman/modelimg.svg',
      namesku: 'Blue T-Shirt (TS001)',
      category: 'Fashion → Men',
      stock: '120',
      price: '₹1,000',
      status: 'Out of Stock',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '5',
      image: '/assests/selleradmin/comman/modelimg.svg',
      namesku: 'Blue T-Shirt (TS001)',
      category: 'Fashion → Men',
      stock: '120',
      price: '₹1,000',
      status: 'Inactive',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    }
  ]

  const columns = [
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ row }) => (
        <img
          src={row.getValue('image')}
          alt='avatar'
          className='w-11 h-11 rounded-sm object-cover'
        />
      )
    },
    {
      accessorKey: 'namesku',
      header: 'Name & SKU'
    },
    {
      accessorKey: 'category',
      header: 'Category'
    },
    {
      accessorKey: 'stock',
      header: 'Stock'
    },
    {
      accessorKey: 'price',
      header: 'Price'
    },
    {
      accessorKey: 'status',
      header: 'Status'
    },
    {
      accessorKey: 'delete',
      header: '',
      cell: ({ row }) => (
        <img
          src={row.getValue('delete')}
          alt='avatar'
          className='w-[24px] h-[24px] rounded-sm object-cover'
        />
      )
    },
    {
      accessorKey: 'edit',
      header: '',
      cell: ({ row }) => (
        <img
          src={row.getValue('edit')}
          alt='avatar'
          className='w-[24px] h-[24px] rounded-sm object-cover'
        />
      )
    }
  ]
  return (
    <div className='px-[2%]'>
      <ReusableTable 
       Route={"/dashboard/marketplace/products/add"}
        showIcon={true}
        data={data}
        columns={columns}
        filterColumn='product'
        title={'Product'}
        
      />
    </div>
  )
}

export default page
