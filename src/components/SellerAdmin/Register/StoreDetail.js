import React from 'react'

function StoreDetail() {
  return (
     <div>
        <div id="boxshadow3" className='w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
           <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>Store Details</h1>
           <div className='mt-[20px] xl:mt-[30px]'>
             <div className='flex place-items-center w-[100%] '>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] '>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Store Name</h1>
                </div>
                
                <div className='w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <input
                name='name'
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal '
                placeholder='Enter Store Name'
              />
          
                </div>

              
              
            </div>
             <div className='flex  w-[100%] mt-[10px] xl:mt-[15px]'>
                <div className='w-[70%] lg:w-[60%] xl:w-[42%] mt-[5px]'>
                    <h1 className='text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>Store Description</h1>
                </div>
                
                <div className='w-[100%] flex  py-[5px] h-[80px] lg:h-[100px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                    <textarea
                    
              
                className='outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal'
                placeholder='Enter About Your Store'
              />
          
                </div>

              
            
            </div>
            <div className=' flex justify-end mt-[15px] xl:mt-[20px]'>
               
                  <button className='px-[15px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer'>Save</button>
            </div>

          
             
             
           </div>
        </div>
    </div>
  )
}

export default StoreDetail
