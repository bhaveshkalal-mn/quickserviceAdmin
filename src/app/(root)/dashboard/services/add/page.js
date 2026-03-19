"use client";
import Save from "@/components/model/Save";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useRouter } from "next/navigation";

function page() {
      const router = useRouter();
  return (
    <div className="w-full px-[2%]">
      <div className="pb-[50px]">
        <div className="flex justify-between place-items-center ">
          <h1 className="text-[18px] lg:text-[20px] font-normal">
          Plumbing Service
          </h1>
          <div className="flex justify-end items-center gap-8 lg:gap-10 ">
            <Save title={'New Service Added'} />

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
        <div className="md:flex gap-x-[10px] lg:gap-x-[20px] w-[100%] mt-[15px] lg:mt-[20px]">
        <div className="w-[100%] border-[1px] border-[#EBEBEB] rounded-[6px] px-[15px] lg:px-[25px] py-[10px] lg:py-[20px]">
          <h2 className="text-[14px] xl:text-[16px] font-semibold">New Service</h2>
            <div className="mt-[20px] lg:mt-[30px] grid gap-y-[15px] xl:gap-y-[20px]">
                <div>
                    <p className="text-[10px] xl:text-[12px] font-normal">Select Main Service</p>
              <div className="mt-[5px]">
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
           </div>
            <div>
                    <p className="text-[10px] xl:text-[12px] font-normal">Add Service Name</p>
              <div className="mt-[5px]">
              <div>
                <Input type="title" placeholder="Service Name" />
              </div>
              </div>
              </div>

              <div>
                    <p className="text-[10px] xl:text-[12px] font-normal">Status</p>
              <div className="mt-[5px]">
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
           </div>

              </div>
              
           
         
        </div>
        <div className="w-[100%] md:w-[60%] border-[1px] border-[#EBEBEB] rounded-[6px] px-[15px] lg:px-[25px] py-[10px] lg:py-[20px]">
              <h2 className="text-[14px] xl:text-[16px] font-semibold">Plumbing Service</h2>
            <div className="mt-[20px] lg:mt-[30px] grid gap-y-[10px] xl:gap-y-[15px]">
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Leak Repair</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Tap & Faucet Repair</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Drain Cleaning</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Pipe Repair</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Toilet Repair</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Bathroom Plumbing</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                  <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Kitchen Plumbing</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                  <div className="flex justify-between place-items-center">
                    <h3 className="text-[12px] xl:text-[14px] font-normal">Water Tank Services</h3>
                    <h3 className="text-[12px] xl:text-[14px] text-[#135BEC] font-normal">Edit</h3>
                </div>
                </div>  
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;
