import React from 'react'

function Declaration() {
  return (
    <div>
        <div id="boxshadow3" className='w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'>
           <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>Declaration</h1>
           <div className='mt-[20px] xl:mt-[30px]'>
             <div className='flex gap-x-[20px]  w-[100%] '>
                <input type='checkbox' className='w-[16px] h-[16px] mt-[3px]' />
                <h1 className=" text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
       I hereby confirm that the information provided is true and accurate, and I undertake to promptly notify you of any changes.
        </h1>
                </div>
                  <div className=" flex justify-end mt-[15px] xl:mt-[20px]">
            <button className="px-[15px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer">
             I confirm
            </button>
          </div>
                </div>
                </div>
                </div>
  )
}

export default Declaration
