"use client";

import Image from "next/image";
import React from "react";


import { useRouter } from "next/navigation";

function page() {
      const router = useRouter();
  return (
    <div className="w-full px-[2%]">
      <div className="pb-[50px]">
        <div className="flex justify-between place-items-center ">
            <div className="flex gap-x-[20px] place-items-center">
          <h1 className="text-[18px] lg:text-[20px] font-normal">
        Bookings
          </h1>
           <Image
              alt="back"
              width={0}
              height={0}
              className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px]"
              src="/assests/comman/rightarray.svg"
            />
            <h1 className="text-[18px] lg:text-[20px] font-normal">
         Booking #102312132
          </h1>
          </div>
          <div className="flex justify-end items-center gap-8 lg:gap-12 ">
            <h1 className="text-[14px] lg:text-[16px] font-normal text-[#135BEC] cursor-pointer">
         Download Invoice
          </h1>

            
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
        <div className="md:flex gap-x-[10px] lg:gap-x-[20px] w-[100%] mt-[15px] lg:mt-[20px]">
            <div className="w-[100%]" >
        <div className="w-[100%] border-[1px] border-[#EBEBEB] rounded-[6px] px-[15px] lg:px-[25px] py-[10px] lg:py-[20px]">
           <div className="flex justify-between place-items-center">
              <h2 className="text-[18px] xl:text-[20px] font-semibold">Booking Progress</h2>
                 <h2 className="text-[12px] xl:text-[14px] font-normal text-[#04A932]">In Progress</h2>
              </div>
               <h2 className="text-[12px] xl:text-[14px] font-normal text-[#888]">Real-time status of your cleaning service</h2>
            <div className="mt-[20px] lg:mt-[30px] grid gap-y-[30px]">
                
           <div className="flex place-items-center gap-x-[15px] xl:gap-x-[20px]">
            <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex place-items-center justify-center bg-[#04A932] rounded-full" >
                 <Image
              alt="right"
              width={0}
              height={0}
              className="w-[14px] lg:w-[16px] xl:w-[18px] h-[14px] lg:h-[16px] xl:h-[18px] "
              src="/assests/comman/true.svg"
            />
            </div>
            <div>
                <p className="text-[12px] xl:text-[14px] font-semibold ">Booking Confirmed </p>
                       <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Professional accepted the requested at 8:45 AM</p>  
            </div>
           </div>
            <div className="flex place-items-center gap-x-[15px] xl:gap-x-[20px]">
            <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex place-items-center justify-center bg-[#04A932] rounded-full" >
                 <Image
              alt="right"
              width={0}
              height={0}
              className="w-[14px] lg:w-[16px] xl:w-[18px] h-[14px] lg:h-[16px] xl:h-[18px] "
              src="/assests/comman/true.svg"
            />
            </div>
            <div>
                <p className="text-[12px] xl:text-[14px] font-semibold ">Professional on route</p>
                       <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Rajesh arrived in your neighborhood at 9:52 AM</p>  
            </div>
           </div>
            <div className="flex place-items-center gap-x-[15px] xl:gap-x-[20px]">
            <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex place-items-center justify-center bg-[#731EE2] rounded-full" >
                 <Image
              alt="right"
              width={0}
              height={0}
              className="w-[14px] lg:w-[16px] xl:w-[18px] h-[14px] lg:h-[16px] xl:h-[18px] "
              src="/assests/comman/true.svg"
            />
            </div>
            <div>
                <p className="text-[12px] xl:text-[14px] font-semibold ">Work Started </p>
                       <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Cleaning in progress since 10:05 AM</p>  
            </div>
           </div>
            <div className="flex place-items-center gap-x-[15px] xl:gap-x-[20px]">
            <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex place-items-center justify-center bg-[#EBEBEB] rounded-full" >
                 <Image
              alt="right"
              width={0}
              height={0}
              className="w-[14px] lg:w-[16px] xl:w-[18px] h-[14px] lg:h-[16px] xl:h-[18px] "
              src="/assests/comman/true.svg"
            />
            </div>
            <div>
                <p className="text-[12px] xl:text-[14px] font-semibold text-[#AAA]">Work Completed  </p>
                       <p className="text-[12px] xl:text-[14px] font-normal text-[#AAA]">Estimated finish around 1:00 PM</p>  
            </div>
           </div>
             

              </div>
              
           
         
        </div>
         <div className="w-[100%]  bg-[#FDFBFE] border-[1px] border-[#EBEBEB] rounded-[6px] px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] mt-[20px]">
           <div className="flex justify-between place-items-center">
              <h2 className="text-[18px] xl:text-[20px] font-semibold">Deep Clean House</h2>
                 <h2 className="text-[12px] xl:text-[14px] font-normal text-[#135BEC]">View Invoice</h2>
              </div>
             <div className="grid grid-cols-2 gap-[20px] mt-[20px] xl:mt-[30px]">
                <div>
                     <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Provider</p>
                       <p className="text-[12px] xl:text-[14px] font-normal">RK Cleaning Service</p> 
                </div>
                  <div>
                     <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Customer</p>
                       <p className="text-[12px] xl:text-[14px] font-normal">Priyanka Shah</p> 
                </div>
                  <div>
                     <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Date</p>
                       <p className="text-[12px] xl:text-[14px] font-normal">14 August, 2026</p> 
                </div>
                  <div>
                     <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Time </p>
                       <p className="text-[12px] xl:text-[14px] font-normal">10:00 AM - 1:00 PM</p> 
                </div>
                <div>
                     <p className="text-[12px] xl:text-[14px] font-normal text-[#888]">Location</p>
                       <p className="text-[12px] xl:text-[14px] font-normal">AB Society, Ahmedabad, GJ</p> 
                </div>
             </div>

            <div className="mt-[20px]  border-[1px] bg-[#EBEBEB] "></div>
            <div className="flex justify-between place-items-center mt-[20px]">
                 <p className="text-[12px] xl:text-[14px] font-bold">Amount</p> 
                  <p className="text-[12px] xl:text-[14px] font-bold">Rs. 340.00</p> 
            </div>
              
           
         
        </div>
        </div>
        <div className="w-[100%] md:w-[60%]">
        <div className="  border-[1px] border-[#EBEBEB] rounded-[6px] px-[15px] lg:px-[30px] xl:px-[50px] py-[10px] lg:py-[20px]">
           <h3 className="text-[12px] lg:text-[14px] xl:text-[16px] font-normal text-center">Assigned Professional</h3>
            <div className=" mt-[15px] lg:mt-[20px] flex place-items-center justify-center" >
                 <Image
              alt="img"
              width={0}
              height={0}
              className="w-[80px] lg:w-[90px] xl:w-[100px] h-[80px] lg:h-[90px] xl:h-[100px]"
              src="/assests/comman/profile.svg"
            />
            </div>
            <h2 className="mt-[10px] lg:mt-[15px] text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-center">Rajesh Kumar</h2>
              <h2 className=" text-[11px] lg:text-[13px] xl:text-[15px] text-[#818181] font-normal text-center">RK Cleaning Services</h2>

          <div className=" mt-[15px] lg:mt-[20px] flex gap-x-[10px] lg:gap-x-[20px]">
            <button className="w-[50%] h-[35px] lg:h-[40px] xl:h-[45px] border-[1px]  border-[#731EE2] hover:bg-[#F0E5FF] cursor-pointer rounded-[10px] text-[12px] xl:text-[14px] text-[#731EE2] font-normal">Call</button>
              <button className="w-[100%] h-[35px] lg:h-[40px] xl:h-[45px] bg-[#731EE2] hover:opacity-90 cursor-pointer rounded-[10px] text-[12px] xl:text-[14px] font-normal text-[#FFF]">Message</button>
            </div>    
            
        </div>
         <div className="  border-[1px] border-[#EBEBEB] rounded-[6px] mt-[20px]">
            <div className="px-[15px] lg:px-[20px]  py-[10px] lg:py-[15px] flex justify-between place-items-center">
               
              <h2 className="text-[12px] lg:text-[14px] xl:text-[16px] font-semibold ">Live Tracking</h2>
                 <h2 className="text-[12px] lg:text-[14px] xl:text-[16px] font-semibold text-[#04A932]">Active</h2>
              
            </div>
             <div className="  border-[1px] border-[#EBEBEB] "></div>
             <div className="h-[200px]"></div>
              <div className="  border-[1px] border-[#EBEBEB] "></div>
               <div className="px-[15px] lg:px-[20px]  py-[10px] lg:py-[15px] flex justify-between place-items-center">
               
              <p className="text-[10px] xl:text-[12px] font-normal text-[#656565]">Rajesh is currently onsite and working on customer’s request. Map shows the verified work location</p>
               
              
            </div>

           
            
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;
