'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'





import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useRouter } from 'next/navigation'


function CVSubmit() {
//     const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       //   paddingRight: '10px',
//       //   paddingLeft: '-115px',
//       width: '100%',
//       height: '0px',
//       borderRadius: '0px',
//       borderBottom: '1px solid #000',
//       borderColor: 'none',
//       borderWidth: '0',
//       borderStyle: 'none',
//       backgroundColor: '#FFF',
//       outline: 'none', // Remove outline
//       boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Remove blue line on focus
//       borderColor: 'transparent' // Remove default border color
//     }),
//     valueContainer: provided => ({
//       ...provided,
//       paddingLeft: '0px' // Remove padding inside the container
//     }),

//     indicatorSeparator: provided => ({
//       ...provided,
//       display: 'none',
//       paddingRight: '20px'
//       // Hide the vertical line behind the arrow
//     })
//   }
//   const options = [
//     { value: 'ui-designer', label: 'UI Designer' },
//     { value: 'creative-designer', label: 'Creative Designer' },
//     { value: 'mobile-app-developer', label: 'Mobile App Developer' }
//   ]

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
          
            <div className=''>
              <form >
                <div className='px-[20px] lg:px-[30px] py-[20px] lg:py-[30px] xl:py-[40px] pb-[20px] lg:pb-[40px] xl:pb-[50px]'>
                  <h1 className='text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold'>
                    Submit Your CV
                  </h1>

                  <div className='mt-[15px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[30px]  flex place-items-center w-[100%]  h-[30px] lg:h-[35px] xl:h-[40px]  border-b-[1px] border-b-[#DDD] hover:border-[black]  '>
                    <input
                      
                      className='outline-none w-[100%] text-[14px] md:text-[10px] lg:text-[11px] xl:text-[13px]  2xl:text-[15px] placeholder:text-[black] '
                      placeholder='Full Name'
                    />
                  </div>
                  

                  <div className='mt-[10px] lg:mt-[20px] flex  place-items-center w-[100%]  h-[30px] lg:h-[35px] xl:h-[40px]  border-b-[1px] border-b-[#DDD] hover:border-[black]  '>
                    <input
                  
                      className='outline-none w-[100%] text-[14px] md:text-[10px] lg:text-[11px] xl:text-[13px]  2xl:text-[15px] placeholder:text-[black]  '
                      placeholder='Enter your Email/mobile number'
                    />
                  </div>
                

                  <div className='mt-[10px] lg:mt-[20px] flex  place-items-center w-[100%] border-b-[1px] border-b-[#DDD] hover:border-[black] h-[30px] lg:h-[35px] xl:h-[40px]   '>
                   <Select>
      <SelectTrigger className="w-[100%] border-0 shadow-none pl-0 text-[14px] md:text-[10px] lg:text-[11px] xl:text-[13px]  2xl:text-[15px]">
        <SelectValue placeholder="Select a timezone " />
      </SelectTrigger>
      <SelectContent>
       
          <SelectItem value="ui-designer">UI Designer</SelectItem>
          <SelectItem value="creative-designer">Creative Designer</SelectItem>
          <SelectItem value="mobile-app-developer">Mobile App Developer</SelectItem>
         
        
        </SelectContent>
        </Select>
                  </div>
                 

                  <div className=' w-[100%]   mt-[30px] xl:mt-[40px] 2xl:mt-[50px]  flex justify-between place-items-center'>
                    <div className='relative  '>
                      
                         <div className='relative flex items-center gap-3 cursor-pointer'>
                               
                               <h1
                                 id='textoverflow'
                                 className=' text-[14px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] z-10'
                               >
                                 Attach a file
                               </h1>
                          
                               <input
                                 type='file'
                                 className='hidden'
                               
                               />
                             </div>
                    
                    </div>

                    <button
                      type='submit'
                      onClick={
                  activeTab >= 2
                    ? handleClose
                    : () => setActiveTab(activeTab + 1)
                }
                      className=' h-[40px] md:h-[25px] lg:h-[30px] xl:h-[35px] 2xl:h-[40px] px-[10px] md:px-[5px] xl:px-[20px] bg-[#0904F2] hover:bg-opacity-80 rounded-full text-[14px] md:text-[11px] lg:text-[12px] xl:text-[14px]  2xl:text-[16px] text-[white] cursor-pointer'
                    >
                    
                        Submit CV
                   
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className='px-[20px] py-[40px] grid place-items-center '>
              <div className='flex justify-center'>
                <Image
                  alt='done'
                  width={0}
                  height={0}
                  src='/assests/comman/done.svg'
                  className='w-[50px] xl:w-[60px] 2xl:w-[64px] h-[50px] xl:h-[60px] 2xl:h-[64px] '
                />
              </div>
              <h1 className='mt-[20px] lg:mt-[25px] xl:mt-[30px] 2xl:mt-[40px] text-center text-[20px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold'>
                Thank you for applying!
              </h1>
              <h1 className='mt-[15px] lg:mt-[10px] xl:mt-[15px] 2xl:mt-[20px] text-center text-[14px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-normal'>
                We’ll review your application and contact you for an interview
                within two weeks if you skills are a match.
              </h1>
                <DialogClose asChild>
              <button
               
                className='mt-[20px] lg:mt-[25px] xl:mt-[30px] 2xl:mt-[40px] h-[40px] md:h-[25px] lg:h-[30px] xl:h-[35px] 2xl:h-[40px] px-[30px] md:px-[20px] xl:px-[30px] bg-[#0904F2] hover:bg-opacity-80 rounded-full text-[14px] md:text-[11px] lg:text-[12px] xl:text-[14px]  2xl:text-[16px] text-[white] cursor-pointer'
              >
                Okay
              </button>
              </DialogClose>
            </div>
          </>
        )
    }
  }
  return (
    <div>
      <Dialog>
            <DialogTrigger asChild>
              <button
        
          className='h-[40px] md:h-[25px] lg:h-[30px] xl:h-[35px] 2xl:h-[40px] px-[25px] md:px-[15px] xl:px-[20px] bg-[#0904F2] hover:bg-opacity-80 rounded-full text-[14px] md:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] text-[white] cursor-pointer'
        >
         Apply this job
        </button>
            </DialogTrigger>
            <DialogContent className=' rounded-[18px] max-w-[80%] md:max-w-[30%] w-full h-auto p-0   shadow-none border-0 '>
              {renderTabContent()}
            </DialogContent>
            </Dialog>
    </div>
  )
}

export default CVSubmit
