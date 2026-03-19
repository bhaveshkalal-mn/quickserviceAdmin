"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

function page () {
  const router = useRouter();
  const [password, setpassword] =useState();
  const [visible, setVisible] =useState(false);
  return (
    <div>
      <div className="grid justify-center place-items-center h-[100vh]">
        <div id="login" className="w-[382px] grid place-items-center">
          
                      <Image
                        width={0}
                        height={0}
                        alt='img'
                        className='w-[80px] md:w-[110px] lg:w-[130px] xl:w-[147px] h-[25px] lg:h-[35px] xl:h-[40px] '
                        src='/assests/comman/logo.svg'
                      />
                   

          <div className="mt-[30px] xl:mt-[40px] w-[250px] sm:w-[260px] md:w-[340px] xl:w-[382px]    bg-[#fff] rounded-[10px] shadow-xl">
            <div className="py-[20px] xl:py-[25px] grid place-items-center">
              <div className="">
                <h1 className="text-[10px] sm:text-[14px] md:text-[18px] font-semibold text-black ">
                  Admin Login
                </h1>
              </div>
              <div className="mt-[15px] sm:mt-[20px] lg:mt-[30px] xl:mt-[50px]">
                <p className="text-[12px] font-medium">Username/Email</p>
                <input className="mt-[5px] xl:mt-[10px] p-[10px]   border-[1px] border-[#E6E6E6] outline-none rounded-[10px] w-[220px] md:w-[280px] h-[40px] xl:h-[50px]"></input>
              </div>
              <div className=" mt-[15px] xl:mt-[20px]">
                <p className="text-[12px] font-medium">Password</p>
                <div className="mt-[5px] xl:mt-[10px] flex place-items-center justify-between border-[1px] border-[#E6E6E6] outline-none px-[10px]  rounded-[10px] w-[220px] md:w-[280px] h-[40px] xl:h-[50px]">
                  <input
                  value={password}
                    type={visible ? "text" : "password"}
                    onChange={(e) => setpassword(e.target.value)}
                    className="   outline-none "
                  ></input>
                  <div onClick={() => setVisible(!visible)} className="w-[10%] flex justify-end ">
                    {
                      visible ? <img className="w-[15px] h-[14px]" src="/assests/comman/visible.png"/> :<img className="w-[15px] h-[14px]" src="/assests/comman/hide.png"/>
                    }
                  </div>
                </div>
              </div>
              <div className=" mt-[10px] md:mt-[15px] lg:mt-[20px]">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="mt-[10px]    bg-[#8225AF] rounded-[10px] w-[220px] md:w-[280px] h-[40px] xl:h-[50px] cursor-pointer"
                >
                  <h1 className="text-[10px] md:text-[14px] font-medium text-[white]">
                    Login
                  </h1>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[30px] xl:mt-[40px] text-[10px] lg:text-[12px] font-normal text-black ">
           © 2023 MN Techgroup. All rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
