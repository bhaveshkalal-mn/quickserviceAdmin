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
           Create New Profile
          </h1>
          <div className="flex justify-end items-center gap-8 lg:gap-10 ">
            <Save title={'New User Added'} />

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
          <div className="px-[25px] py-[20px]">
            <div className="grid grid-cols-3 gap-[20px]">
              <div>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
              <div>
                <Input type="title" placeholder="Full Name" />
              </div>
              <div>
                <Input type="title" placeholder="Email Address" />
              </div>
              <div>
                <Input type="title" placeholder="Phone Number" />
              </div>
            </div>
            <div className="mt-[30px] flex gap-x-[50px] place-items-center">
              <h2 className="text-[14px] font-normal">Initial Status</h2>
              <RadioGroup defaultValue="active" className="flex">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="active" id="r1" />
                  <label htmlFor="r1">Active</label>
                </div>
                  <div className="flex items-center gap-3">
                  <RadioGroupItem value="inactive" id="r2" />
                  <label htmlFor="r2">Inactive</label>
                </div>
               
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
