'use client'
import ReusableTable from '@/components/Admin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page() {
     const data = [
        {
          id: '1',
          date: '01-02-2025',
          customer: 'Amit Kumar',
          product: 'Electrician Service',
          ratings: '/assests/selleradmin/icon/rating.svg',
          review: '"Great sound quality!"',
          status:  'Approved',
          show:  '/assests/selleradmin/icon/righticon.svg'
        },
        {
          id: '2',
         date: '01-02-2025',
          customer: 'Amit Kumar',
          product: 'Plumbing Service ',
          ratings: '/assests/selleradmin/icon/rating.svg',
          review: '"Great sound quality!"',
          status:  'Pending',
          show:  '/assests/selleradmin/icon/righticon.svg'
        },
        {
          id: '3',
          date: '01-02-2025',
          customer: 'Amit Kumar',
          product: 'Home Cleaning',
          ratings: '/assests/selleradmin/icon/rating.svg',
          review: '"Great sound quality!"',
          status:  'Approved',
          show:  '/assests/selleradmin/icon/righticon.svg'
        },
        {
          id: '4',
          date: '01-02-2025',
          customer: 'Amit Kumar',
          product: 'Home Cleaning',
          ratings: '/assests/selleradmin/icon/rating.svg',
          review: '"Great sound quality!"',
          status:  'Pending',
          show:  '/assests/selleradmin/icon/righticon.svg'
        },
        {
          id: '5',
          date: '01-02-2025',
          customer: 'Amit Kumar',
          product: 'Plumbing Service ',
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
            <Link href="">
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
    <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            <div className='flex justify-between place-items-center'>
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
                 Reviews
                </h1>
              </div>
              
            </div>
            <div className='mt-[20px]'>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-[10px]'>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                 Reviews
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
               12,323
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                 Average Rating
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                 4.5 <span className='text-[10px] lg:text-[12px] text-[#575757]'>Out of 5</span>
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] border-[1px] border-[#EBEBEB] hover:border-[black] rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                Flagged for Reviews
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                 23 <span className='text-[10px] lg:text-[12px] text-[#FC0A0A]'>Need Action</span>
                  </h1>
                </div>
               
               
              </div>
            </div>
             <div className='mt-[20px]'>
      <ReusableTable data={data} columns={columns} filterColumn=' reviews' title={'Products Reviews'}  />

      
    </div>
            </div>
            </div>
      
    </div>
  )
}

export default page
