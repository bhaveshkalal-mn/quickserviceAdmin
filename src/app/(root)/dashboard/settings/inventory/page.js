'use client'
import InvetoryTable from '@/components/SellerAdmin/module/InventoryTable'
import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
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
      priority: '1',
      status: 'Active',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '2',
      name: 'Mumbai Store',
      type: 'Retail Store',
      location: 'Mumbai, India',
      person: 'Priya Mehta',
      priority: '2',
      status: 'Active',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    },
    {
      id: '3',
      name: 'Vendor Dropship',
      type: 'Supplier',
      location: 'Bangalore, India',
      person: 'Vendor Support',
      priority: '0',
      status: 'Inactive',
      delete: '/assests/selleradmin/comman/deleteicon.svg',
      edit: '/assests/selleradmin/comman/editicon.svg'
    }
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
      accessorKey: 'priority',
      header: 'Priority'
    },
    {
      accessorKey: 'status',
      header: 'Status'
    },

    {
      accessorKey: 'delete',
      header: '',
      cell: ({ row }) => (
        <div className='h-11 flex place-items-center'>
          <img
            src={row.getValue('delete')}
            alt='avatar'
            className='w-[24px] h-[24px] rounded-sm object-cover'
          />
        </div>
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
    <>
      <div className='w-full px-[2%]'>
        <div className='pb-[50px]'>
          <div className='flex justify-between place-items-center'>
            <div className='flex gap-x-[20px] place-items-center '>
              <Link href='/dashboard/settings'>
                <h1 className='text-[18px] lg:text-[20px] font-normal text-[#b5b2b2]'>
                  Settings
                </h1>
              </Link>
              <h1 className='text-[16px] lg:text-[18px] text-[#C5C5C5] font-normal'>
                /
              </h1>
              <h1 className='text-[18px] lg:text-[20px] font-normal'>
                Inventory Sources
              </h1>
            </div>
            <div className='flex place-items-center gap-6 lg:gap-9'>
              <Link href='/dashboard/settings/inventory/newinventory'>
            <Button className='rounded-md bg-[#8225AF] h-[40px]'>
              <Image
                alt='add'
                width={0}
                height={0}
                src='/assests/selleradmin/comman/plusicon.svg'
                className='w-[24px] h-[24px] cursor-pointer'
              />
            </Button>
            </Link>
              <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
                </div>
          </div>
          <div className=''>
            <InvetoryTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
