"use client";
import EmailSend from "@/components/model/EmailSend";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
              Inventory Source Details (Active){" "}
            </h1>
            <div className="flex place-items-center gap-x-[25px]">
              <Image
                alt="back"
                onClick={() => router.back()}
                width={0}
                height={0}
                className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer ml-[10px]"
                src="/assests/selleradmin/comman/backarray.svg"
              />
            </div>
          </div>
          <div className="border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]">
            <div className="grid grid-cols-4">
              <div className="flex justify-between">
                <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                  <h1 className="text-[12px] xl:text-[14px] font-bold">
                    Seller Information
                  </h1>
                  <div className="mt-[10px]">
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                      TrendyStore <br></br> amit@gmail.com
                    </h1>
                  </div>
                </div>
                <div className="w-[1px] h-[100%] bg-[#EBEBEB]"></div>
              </div>
              <div className="flex justify-between">
                <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                  <h1 className="text-[12px] xl:text-[14px] font-bold">
                    {" "}
                    Contact Information
                  </h1>
                  <div className="mt-[10px]">
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                      Ms. Marianna Wisozk IV marina@gmail.com <br></br> +91
                      10000 00001
                    </h1>
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                      Fax : 0389330303
                    </h1>
                  </div>
                </div>
                <div className="w-[1px] h-[100%] bg-[#EBEBEB]"></div>
              </div>
              <div className="flex justify-between">
                <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                  <h1 className="text-[12px] xl:text-[14px] font-bold">
                    {" "}
                    Source Address
                  </h1>
                  <div className="mt-[10px]">
                    <h1 className="text-[12px] xl:text-[14px] font-normal">
                      Ahmedabad state highway, Sector 14, Gandhinagar, Gujarat
                      382014
                    </h1>
                  </div>
                </div>
                <div className="w-[1px] h-[100%] bg-[#EBEBEB]"></div>
              </div>

              <div className="px-[20px] xl:px-[25px] py-[15px] xl:py-[20px] mb-[20px]">
                <h1 className="text-[12px] xl:text-[14px] font-bold">
                  {" "}
                 Settings
                </h1>
                <div className="mt-[10px]">
                  <h1 className="text-[12px] xl:text-[14px] font-semibold">
                   Latitude :<span className=" font-normal"> 01028820202</span>{" "}
                    <br></br> Longitude :{" "}
                    <span className=" font-normal">3955852205</span>{" "}
                    <br></br>Priority :
                    <span className="font-normal">2</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
