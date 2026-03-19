"use client"
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function DeleteProduct() {
     const router = useRouter()
        
      
        const handleClose = () => {
          setOpen(false)
          // setActiveTab(1)
          router.push('/')
        }
           const [activeTab, setActiveTab] = useState(1)
    const renderTabContent = () => {
     switch (activeTab) {
      case 1:
        return (
          <>
          
                     <div className='px-[20px]'>
                       <div className='text-center mb-[5px]'>
                         <div className='mt-[10px]'>
                           <h1 className='text-[14px] xl:text-[16px] place-items-center'>
                           Please confirm to delete this product?
                           </h1>
                         </div>
                         <div className='flex gap-x-[15px] mt-[20px] xl:mt-[40px] justify-between'>
                             <DialogClose asChild>
                             <button className='w-[100%] h-[40px] xl:h-[50px] border-[1px] border-[#0F52BA] rounded-[8px] hover:bg-[#F2F7FF] text-[12px] lg:text-[14px] xl:text-[16px] cursor-pointer'>
                               Cancel
                             </button>
                           </DialogClose>

                           
                             <button
                               
                                onClick={
                  activeTab >= 2
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                               className='w-[100%] h-[40px] xl:h-[50px] bg-[#8225AF] rounded-[8px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                             >
                               Yes, Delete
                             </button>
                          
                          
                         </div>
                       </div>
                     </div>
                   
            </>
        )
        case 2:
        return (
          <>
          
                     <div className='px-[0px] '>
                       <div className='text-center  mb-[5px]'>
                         <div className='mt-[10px]'>
                           <h1 className='text-[14px] xl:text-[16px] place-items-center'>
                         This product has been permanently deleted.
                           </h1>
                         </div>
                         <div className='flex gap-x-[15px] mt-[20px] xl:mt-[40px] justify-center'>
                           <DialogClose asChild>
                             <button
                              
                               className='px-[25px] h-[40px] xl:h-[50px] bg-[#8225AF] rounded-[8px] hover:opacity-90 text-[12px] lg:text-[14px] xl:text-[16px] text-[white] cursor-pointer'
                             >
                               Okay
                             </button>
                           </DialogClose>
                           
                         </div>
                       </div>
                     </div>
                  
            </>
        )
          
    }
  }
  return (
     <div>
   <Dialog>
            <DialogTrigger asChild>
 <div  className='w-[100px] bg-[red] h-[20px]'>hello</div>
            </DialogTrigger>
            <DialogContent showCancelIcon = {false} className='bg-[#fff]  w-[260px] lg:w-[270px] xl:w-[300px]    rounded-[10px] border-[1px] border-[#DDD] p-0'>
                 <div className="w-[100%] h-[100%] px-[10px] lg:px-[20px] py-[35px] lg:py-[40px] ">
                      {renderTabContent()}
                 </div>
                 </DialogContent>
                 </Dialog>
                 </div>
  )
}

export default DeleteProduct
