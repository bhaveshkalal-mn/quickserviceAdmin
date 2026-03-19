"use client"
import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function EditInformaiton({ showCancelIcon }) {
  return (
    <div>
    <Dialog showCancelIcon={showCancelIcon}>
        <DialogTrigger asChild>
            <div className="flex justify-end">
                                     <Image
                                       alt="edit"
                                       width={0}
                                       height={0}
                                       className="w-[22px] xl:w-[24px] h-[22px] xl:h-[24px] cursor-pointer"
                                       src="/assests/selleradmin/comman/editicon.svg"
                                     />
                                   </div>
        </DialogTrigger>
        <DialogContent showCancelIcon = {false} className='w-[90%] md:w-[350px]  lg:w-[400px] xl:w-[450px] bg-[#fff]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%] '>
            <div className='px-[20px] xl:px-[30px]   py-[20px] '>
                <h1 className='text-[16px] xl:text-[18px] font-normal'>Edit Basic Information</h1>
                <div className='mt-[20px] xl:mt-[25px]'>
                      <div>
                                     <Input className="hover:border-[1px] hover:border-[black]" type="title" placeholder="Owne Name" />
                                  </div>
                                   <div className='mt-[15px] xl:mt-[20px]'>
                                                                   
                                                   <Select >
                                        <SelectTrigger className="w-[100%] hover:border-[1px] hover:border-[black]">
                                          <SelectValue placeholder="Business Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                            <SelectItem value="option3">Option 3</SelectItem>
                                            
                                          
                                        </SelectContent>
                                      </Select>
                                     
                                                </div>
                                                <div className='mt-[15px] xl:mt-[20px]'>
                                                                   
                                                   <Select >
                                        <SelectTrigger className="w-[100%] hover:border-[1px] hover:border-[black] ">
                                          <SelectValue placeholder="Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                            <SelectItem value="option3">Option 3</SelectItem>
                                            
                                          
                                        </SelectContent>
                                      </Select>
                                     
                                                </div>
                                                 <div className='mt-[40px] xl:mt-[50px] mb-[20px] flex justify-center gap-x-[20px] place-items-center'>
                                                                                    <DialogClose>
                                                                                   <button className='w-[110px] lg:w-[120px] xl:w-[125px] h-11 border-[1px] border-[#B0B0B0] hover:bg-[#F2F7FF] rounded-[10px] text-[14px] xl:text-[16px] font-normal cursor-pointer'>Cancel</button>
                                                                                   </DialogClose>
                                                                                   <DialogClose>
                                                                                     <button className='w-[110px] lg:w-[120px] xl:w-[125px] h-11 bg-[#8225AF] hover:opacity-90 rounded-[10px] text-[14px] xl:text-[16px] font-normal text-[white] cursor-pointer'>Save</button>
                                                                                     </DialogClose>
                                                                                </div>
                </div>
                </div>
                </div>
                </DialogContent>
                </Dialog>
                </div>
  )
}

export default EditInformaiton
