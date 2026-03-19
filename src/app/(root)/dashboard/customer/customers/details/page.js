"use client";

import Save from "@/components/model/Save";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  return (
    <>
      <div className="w-full px-[2%]">
        <div className="pb-[50px]">
          <div className="flex justify-between place-items-center ">
            <h1 className="text-[18px] lg:text-[20px] font-normal">
              Amit Kumar{" "}
            </h1>
            <div className="flex justify-end items-center gap-7 xl:gap-8 ">
              <Image
                alt="delete"
                width={0}
                height={0}
                className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
                src="/assests/selleradmin/icon/delete.svg"
              />
              <Image
                alt="logout"
                width={0}
                height={0}
                className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
                src="/assests/selleradmin/icon/logout.svg"
              />
              <Image
                alt="cart"
                width={0}
                height={0}
                className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
                src="/assests/selleradmin/icon/cart.svg"
              />
              <Save />

              <div className="border-[1px] h-[24px] border-[#E2E2E2]"></div>
              <Image
                alt="back"
                onClick={() => router.back()}
                width={0}
                height={0}
                className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
                src="/assests/selleradmin/comman/backarray.svg"
              />
            </div>
          </div>
          <div className="border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]">
            <div className="grid grid-cols-3">
              <div className="flex justify-between">
                <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                  <h1 className="text-[12px] xl:text-[14px] font-bold">
                    {" "}
                    Customer Info
                  </h1>
                  <div className="mt-[10px]">
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                      Amit Kumar <br></br> amit@gmail.com <br></br>
                      +91 10000 00001 <br></br> Gender : Male <br></br> DoB : 02-10-1980 <br></br> Group -
                      General{" "}
                    </h1>
                  </div>
                </div>
                <div className="w-[1px] h-[100%] bg-[#EBEBEB]"></div>
              </div>
              <div className="flex justify-between">
                <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                  <h1 className="text-[12px] xl:text-[14px] font-bold">
                    {" "}
                   Address
                  </h1>
                  <div className="mt-[10px]">
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                     Ahmedabad state highway, <br></br>
Sector 14, Gandhinagar,<br></br>
Gujarat 382014
                    </h1>
                  </div>
                </div>
                <div className="w-[1px] h-[100%] bg-[#EBEBEB]"></div>
              </div>

              <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                <h1 className="text-[12px] xl:text-[14px] font-bold">
                  {" "}
                Total Revenue
                </h1>
                <div className="mt-[10px]">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                   ₹2,850
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h1 className="text-[12px] xl:text-[14px] font-bold mt-[10px] lg:mt-[15px]">
                   
                 Purchases
                  </h1>
          <div className="border-[1px] border-[#EBEBEB] rounded-[6px] mt-[10px] lg:mt-[15px]">
            <div className="h-[50px] w-[100%] bg-[#F4F4F4] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-6 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Product Name
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    SKU/Variant
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Qty
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold ">
                    Price
                  </h1>
                </div>
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Sub Total
                  </h1>
                </div>
                 <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Grand Total
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-[50px] w-[100%] border-b-[1px] border-[#EBEBEB] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-6 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    Blue T-Shirtl
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    TS-BL-M
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    1
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-normal ">
                    ₹500
                  </h1>
                </div>
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    ₹500
                  </h1>
                </div>
                 <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    ₹2000
                  </h1>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
          <h1 className="text-[12px] xl:text-[14px] font-bold mt-[10px] lg:mt-[15px]">
                   
                 Invoices
                  </h1>
          <div className="border-[1px] border-[#EBEBEB] rounded-[6px] mt-[10px] lg:mt-[15px]">
            <div className="h-[50px] w-[100%] bg-[#F4F4F4] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-4 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                   Invoice ID
                  </h1>
                </div>
                <div className="flex ">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Order ID
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Invoice Date
                  </h1>
                </div>
               
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                   Amount
                  </h1>
                </div>
                 
              </div>
            </div>
            <div className="h-[50px] w-[100%] border-b-[1px] border-[#EBEBEB] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-4 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    INV-1001
                  </h1>
                </div>
                <div className="flex ">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    ORD1234
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                  01-02-2025
                  </h1>
                </div>
                
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                    ₹4,500
                  </h1>
                </div>
                
              </div>
            </div>
          </div>
          </div>
          <div>
          <h1 className="text-[12px] xl:text-[14px] font-bold mt-[10px] lg:mt-[15px]">
                   
                Reviews
                  </h1>
          <div className="border-[1px] border-[#EBEBEB] rounded-[6px] mt-[10px] lg:mt-[15px]">
            <div className="h-[50px] w-[100%] bg-[#F4F4F4] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-5 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                  Date
                  </h1>
                </div>
                <div className="flex   ">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                   Seller
                  </h1>
                </div>
                 <div className="flex   ">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                   Product
                  </h1>
                </div>
                <div className="flex ">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                    Ratings
                  </h1>
                </div>
               
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                  Review
                  </h1>
                </div>
                 
              </div>
            </div>
            <div className="h-[50px] w-[100%] border-b-[1px] border-[#EBEBEB] flex place-items-center ">
              <div className="w-[100%] grid grid-cols-5 px-[20px] xl:px-[25px]">
                <div>
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                   01-02-2025
                  </h1>
                </div>
                <div className="flex  ">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                  TrendyStore
                  </h1>
                </div>
                 <div className="flex  ">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                   Designer Traditional Dress
                  </h1>
                </div>
                <div className="flex ">
                  <Image alt="rating" width={0} height={0}
                   src='/assests/selleradmin/icon/rating.svg'
                   className="w-[100px] lg:w-[130px] xl:w-[160px] h-[24px] "
                  />
                </div>
                
                <div className="flex justify-end">
                  <h1 className="text-[12px] xl:text-[14px] font-normal">
                   "Great sound quality!"
                  </h1>
                </div>
                
              </div>
            </div>
          </div>
          </div>
           <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
                         <h1 className='text-[12px] xl:text-[14px] font-bold'>Add Notes</h1>
                        <textarea
                                className='mt-[15px] lg:mt-[20px] bg-[#F9F9F9] rounded-[6px] w-[100%] h-[80px] px-[10px] xl:px-[15px] py-[7px] xl:py-[10px]'
                                
                                />
                                
                         </div>
        </div>
      </div>
    </>
  );
}

export default page;
