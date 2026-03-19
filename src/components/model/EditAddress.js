import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'


function EditAddress() {
  return (
    <div>
       <Dialog>
            <DialogTrigger asChild>
 <div className="p-[6px] rounded-full hover:bg-[#E1E1E1]">
                <Image
                  alt="img"
                  width={0}
                  height={0}
                  src="/assests/setting/edit.svg"
                  className="w-[16px] lg:w-[18px] xl:w-[20px] cursor-pointer"
                  
                />
                </div>
            </DialogTrigger>
            <DialogContent className='w-[90%] md:w-[350px]  lg:w-[400px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
                 <div className="w-[100%] h-[100%] ">
                  <div className='p-[25px] xl:p-[35px]'>
                    <div className="">
                      <h1 className="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal">
                      Modify Address
                      </h1>
                      <div className='mt-[10px] lg:mt-[20px] xl:mt-[25px]'>
                        <input
                          type="text"
                          className="w-[100%]  h-[25px] lg:h-[30px] xl:h-[40px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[100px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black  placeholder:text-[#9C9C9C] "
                          placeholder="Name"
                        />
                        <div className='mt-[5px] lg:mt-[10px] '>
                        <input
                          type="text"
                          className="w-[100%]  h-[25px] lg:h-[30px] xl:h-[40px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[100px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black  placeholder:text-[#9C9C9C] "
                          placeholder="Mobile Number"
                        />
                        </div>
 </div>
                    
                        </div>
                       
                        <div className="flex gap-x-[10px] xl:gap-x-[15px] place-items-start mt-[10px] lg:mt-[15px]  xl:mt-[20px]">
                                       <div className="w-[18px]">
                                      <Image
                                         alt="img"
                                         width={0}
                                         height={0}
                                         src="/assests/setting/location.svg"
                                         className="w-[11px] lg:w-[12px] xl:w-[14px] h-[11px] lg:h-[12px] xl:h-[14px] mt-[4px] "
                                         
                                       />
                                       </div>
                                     <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Delivery Address</h1>
                                     </div>
                       <div className='mt-[10px] lg:mt-[15px]  xl:mt-[20px]'>
                          <input
                          type="text"
                          className="w-[100%]  h-[25px] lg:h-[30px] xl:h-[40px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[100px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black  placeholder:text-[#9C9C9C] "
                          placeholder="Pincode"
                        />
                       </div>
                        <div className='mt-[5px] lg:mt-[10px] '>
                      <input
                          type="text"
                          className="w-[100%]  h-[25px] lg:h-[30px] xl:h-[40px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[100px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black  placeholder:text-[#9C9C9C] "
                          placeholder="Address (House No, Building, Street, Area)"
                        />
                        </div>
                        <div className='mt-[5px] lg:mt-[10px] '>
                      <input
                          type="text"
                          className="w-[100%]  h-[25px] lg:h-[30px] xl:h-[40px]  px-[15px] border-[1px] border-[#EAEAEA] hover:border-[black] rounded-[100px] outline-none text-[10px] lg:text-[12px] xl:text-[14px] text-black  placeholder:text-[#9C9C9C] "
                          placeholder="Locality or Town"
                        />
                        </div>



                        <div className="mt-[20px] xl:mt-[25px] flex gap-x-[4%] ml-[5px]">
                    <input
                      type="checkbox"
                      className="w-[14px] md:w-[16px] lg:w-[18px] xl:w-[20px]"
                    />
                    <h1
                      className="text-[10px] lg:text-[12px] xl:text-[14px] font-normal cursor-pointer"
                    >
                      Make it default address
                    </h1>
                  </div>
                  <div className='flex gap-x-[20px] mt-[20px] xl:mt-[25px]'>
                
                  
                  <button  id='gradientbg' className='w-[100%] h-[30px] lg:h-[35px] xl:h-[45px] text-[10px] lg:text-[12px] xl:text-[14px] px-[15px] lg:px-[20px] xl:px-[25px]  justify-center  rounded-[100px] text-[white]'>Save this address</button>
                 
                  </div>

                        </div>
                      
                      </div>
            </DialogContent>
            </Dialog>
    </div>
  )
}

export default EditAddress
