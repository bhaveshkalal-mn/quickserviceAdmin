
'use client'

import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page () {
  const data = [
   
  
     {
      id: '1',
     no: '1',
     code: 'wholesale',
     name:'wholesale',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '2',
     no: '2',
     code: 'General',
     name:'General',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
     {
      id: '3',
     no: '3',
     code: 'Guest',
     name:'Guest',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'no',
      header: 'Sr. No'
    },
    {
      accessorKey: 'code',
      header: 'Code'
    },
    
    {
      accessorKey: 'name',
      header: 'Group Name'
    },
   
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/customer/groups/add">
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
        <div className=" absolute right-7 xl:right-7.5 ">
                        <Link href="/dashboard/customer/groups/add">
                         <Button className='rounded-md bg-[#8225AF] h-[40px] flex justify-end'>
              <Image
                alt='add'
                width={0}
                height={0}
                src='/assests/selleradmin/comman/plusicon.svg'
                className='w-[24px] h-[24px] cursor-pointer'
              />
            </Button>
            </Link>
                    </div>
      <ReusableTable  showIcon={true} data={data} columns={columns}  title={'Groups'}  />
      

      
    </div>
  )
}

export default page

