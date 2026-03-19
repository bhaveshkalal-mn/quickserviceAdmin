"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Save({ showCancelIcon, title }) {
  const router = useRouter();

  return (
    <div>
      <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
          <Image
            alt="save"
            width={0}
            height={0}
            className="w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer"
            src="/assests/selleradmin/comman/save.svg"
          />
        </DialogTrigger>
        <DialogContent
          showCancelIcon={false}
          className="bg-[#fff]  w-[220px] lg:w-[250px] xl:w-[330px]    rounded-[10px] border-[1px] border-[#DDD] p-0"
        >
          <div className="w-[100%] h-[100%] ">
            <div className="text-center p-[20px] xl:p-[30px] mb-[5px]">
              <div className="px-[0px] ">
                <div className="text-center  mb-[5px]">
                  <div className="mt-[20px]">
                    <h1 className="text-[14px] xl:text-[16px] place-items-center">
                      {title}
                    </h1>
                  </div>
                  <div className="flex gap-x-[15px] mt-[30px] xl:mt-[40px] justify-center">
                    <button
                      onClick={() => router.back()}
                      className="px-[25px] h-[40px] xl:h-[50px] bg-[#731EE2] rounded-[8px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Save;
