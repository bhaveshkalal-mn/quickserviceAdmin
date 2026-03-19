import React from 'react'

function ContactInfo() {
  return (
   <div>
        <div id="boxshadow3" className='w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
           <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>Contact Info</h1>
           <div className='mt-[20px] xl:mt-[30px]'>
             <div className='flex place-items-center w-[100%] '>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] '>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Your Name</h1>
                </div>
                
                <div className='w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <input
                name='name'
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal '
                placeholder='Enter Your Name'
              />
          
                </div>

              
              
            </div>
             <div className='flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]'>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] '>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Mobile Number</h1>
                </div>
                
                <div className='w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <input
                name='name'
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal '
                placeholder='Enter Mobile Number'
              />
          
                </div>

              
            
            </div>
            <div className='flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]'>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] '>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Official Email</h1>
                </div>
                <div className='w-[100%]'>
                <div className='w-[100%] flex place-items-center justify-between  h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <input
                name='name'
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal '
                placeholder='Enter GSTIN Number'
              />
          <button className='px-[15px] h-[25px] lg:h-[28px] xl:h-[33px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer'>Verify</button>
                </div>

              
                </div>
            </div>

          
             
             
           </div>
        </div>
    </div>
  )
}

export default ContactInfo
