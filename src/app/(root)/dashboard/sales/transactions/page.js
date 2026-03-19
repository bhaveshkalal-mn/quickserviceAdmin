'use client'
import ReusableTable from '@/components/SellerAdmin/module/ProductTable'
import Link from 'next/link'
import React from 'react'

function page() {
      const data = [
    {
      id: '1',
      transactionid: 'TXN8745632',
      orderid: 'ORD12345',
      date: '25-Aug-25',
      method: 'UPI',
      status:  'Success',
      amount:  '₹2,850',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '2',
      transactionid: 'TXN8745632',
      orderid: 'ORD12345',
      date: '25-Aug-25',
      method: 'Credit Card',
      status:  'Pending',
      amount:  '₹1,200',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    {
      id: '3',
      transactionid: 'TXN8745632',
      orderid: 'ORD12345',
      date: '25-Aug-25',
      method: 'Wallet',
      status:  'Failed',
      amount:  '₹999',
      show:  '/assests/selleradmin/icon/righticon.svg'
    },
    
  ]

  const columns = [
   
    {
      accessorKey: 'transactionid',
      header: 'Transaction Id'
    },
    {
      accessorKey: 'orderid',
      header: 'Order ID'
    },
    {
      accessorKey: 'date',
      header: 'Date'
    },
    
    {
      accessorKey: 'method',
      header: 'Payment Method'
    },
     {
      accessorKey: 'status',
      header: 'Status'
    },
     {
      accessorKey: 'amount',
      header: 'Amount'
    },
     {
      accessorKey: 'show',
       header: '',
      cell: ({ row }) => (
        <Link href="/dashboard/sales/transactions/details">
            <div className='h-11 flex place-items-center'>
        <img
        
          src={row.getValue('show')}
          alt='avatar'
          className=' w-[14px] h-[14px] rounded-sm object-cover'
        />
        </div>
        </Link>
      )
    },
  ]
  return (
    <>
    <div className='mb-[50px] '>
        <div className='flex w-[100%]'>
          <div className='w-full  px-[2%] '>
            
              <div>
                <h1 className='text-[14px] lg:text-[16px] xl:text-[20px] font-normal'>
               Transactions
                </h1>
              </div>
             <div className='mt-[30px] xl:mt-[40px]'>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-[10px]'>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#FBF4FF] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Total Sale (Seller)
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    24K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#E0FFDE] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                    Total Commission (Admin)
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    21K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#FFE0E0] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Total Sale (Invoiced)
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    3K
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#FFF9E6] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                    Total Orders
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    120
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#EDEFFF] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                   Total Payout
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    90
                  </h1>
                </div>
                <div className='w-[100%] px-[10px] lg:px-[15px] py-[5px] lg:py-[10px] pb-[5px] lg:pb-[8px] xl:pb-[12px] bg-[#F2FFD8] hover:opacity-80 rounded-[6px]'>
                  <p className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                    Remaining Payout
                  </p>
                  <h1 className='text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>
                    2500.00
                  </h1>
                </div>
               
              </div>
            </div>
            <div className='mt-[30px] xl:mt-[40px]'>
             <ReusableTable data={data} columns={columns} filterColumn='product'  />
             </div>
              </div>
              </div>
              </div>
    </>
  )
}

export default page
