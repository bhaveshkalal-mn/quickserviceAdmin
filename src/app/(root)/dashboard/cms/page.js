
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
     page: 'Privacy Policy',
     url:'privacy-policy',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
     no: '2',
     page: 'Shipping Policy',
     url:'shipping-policy',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
     no: '3',
     page: 'Payment Policy',
     url:'payment-policy',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '4',
     no: '4',
     page: 'What’s New',
     url:'whats-new',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '5',
     no: '5',
     page: 'Customer Service',
     url:'customer-service',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '6',
     no: '6',
     page: 'Terms of Use',
     url:'terms-of-use',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
  ]

  const columns = [
   
    {
      accessorKey: 'no',
      header: 'ID'
    },
    {
      accessorKey: 'page',
      header: 'Page'
    },
    
    {
      accessorKey: 'url',
      header: 'URL Key'
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
                        
                         <Button className='rounded-md bg-[#8225AF] h-[40px] flex justify-end'>
              <Image
                alt='add'
                width={0}
                height={0}
                src='/assests/selleradmin/comman/plusicon.svg'
                className='w-[24px] h-[24px] cursor-pointer'
              />
            </Button>
           
                    </div>
      <ReusableTable  showIcon={true} data={data} columns={columns}  title={'Groups'}  />
      

      
    </div>
  )
}

export default page

