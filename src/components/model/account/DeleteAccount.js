"use client";

import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DeleteAccount({ showCancelIcon }) {
     const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <>
            <div className="w-[100%] h-[100%] ">
              <div className="px-[20px] xl:px-[30px]   py-[20px] ">
                <h1 className="text-[16px] xl:text-[18px] font-normal">
                  Delete Account
                </h1>
                <h1 className="text-[12px] xl:text-[13px] font-normal text-[#676767]">
                  Deleting your account is permanent and cannot be undone.
                </h1>
                <div className="mt-[25px] xl:mt-[35px]">
                  <h1 className="text-[12px] xl:text-[14px] font-normal ">
                    Select Reason
                  </h1>
                  <div className="mt-[5px]">
                    <Select>
                      <SelectTrigger className="w-[100%] hover:border-[1px] hover:border-[black]">
                        <SelectValue placeholder="Select Reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-[40px] xl:mt-[50px] mb-[20px] flex justify-center gap-x-[20px] place-items-center">
                  <DialogClose>
                    <button className="w-[110px] lg:w-[120px] xl:w-[125px] h-11 border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer">
                      Cancel
                    </button>
                  </DialogClose>
                  
                    <button 
                     onClick={
                activeTab >= 3 ? handleClose : () => setActiveTab(activeTab + 1)
              }
                    className="w-[110px] lg:w-[120px] xl:w-[125px] h-11 bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer">
                     Continue
                    </button>
                 
                </div>
              </div>
            </div>

           
          </>
        );
      case 2:
        return <>
            <div className="w-[100%] h-[100%] ">
              <div className="px-[20px] xl:px-[30px]   py-[20px] ">
                <h1 className="text-[16px] xl:text-[18px] font-normal">
                 Confirm Password
                </h1>
               
                <div className="mt-[20px] xl:mt-[30px]">
                   <div>
                                     <Input className="hover:border-[1px] hover:border-[black]" type="password" placeholder="Enter Password" />
                                  </div>
                                   <div className='flex gap-x-[10px] mt-[20px] w-[100%] '>
                <input type='checkbox' className='w-[24px] h-[24px]' />
                <h1 className=" text-[11px] lg:text-[12px] xl:text-[14px] font-normal text-[#676767]">
       I understand that deleting my account is permanent and I will lose access to all data.
        </h1>
                </div>
                </div>
                <div className="mt-[40px] xl:mt-[50px] mb-[20px] flex justify-center gap-x-[20px] place-items-center">
                  <DialogClose>
                    <button className="w-[110px] lg:w-[120px] xl:w-[125px] h-11 border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer">
                      Cancel
                    </button>
                  </DialogClose>
                 
                    <button 
                     onClick={
                activeTab >= 3 ? handleClose : () => setActiveTab(activeTab + 1)
              }
                    className="w-[110px] lg:w-[120px] xl:w-[125px] h-11 bg-[#EF4136] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer">
                    Delete
                    </button>
                 
                </div>
              </div>
            </div>

           
          </>;
      case 3:
        return <>
         <div className="w-[100%] h-[100%] ">
              <div className="px-[20px] xl:px-[30px]   py-[50px] ">
                <div className='text-center  '>
                                         <div className=''>
                                           <h1 className='text-[14px] xl:text-[16px] place-items-center'>
                                     Your account has been deleted. You will receive a confirmation email shortly.
                                           </h1>
                                         </div>
                                         <div className='flex gap-x-[15px] mt-[20px] xl:mt-[40px] justify-center'>
                                           
                                             <button
                                              onClick={() => router.push("/seller/login")}
                                               className='px-[25px] h-11 bg-[#8225AF] rounded-[8px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                                             >
                                               Okay
                                             </button>
                                         
                                           
                                         </div>
                                       </div>
                </div>
                </div>
        </>;
    }
  };
  return (
    <div>
      <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
          <button className="px-[20px] h-[30px] lg:h-[35px] xl:h-[40px] bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer">
            Delete My Account
          </button>
        </DialogTrigger>
        <DialogContent
          showCancelIcon={false}
          className="w-[90%] md:w-[350px]  lg:w-[400px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0"
        >
          {renderTabContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteAccount;
