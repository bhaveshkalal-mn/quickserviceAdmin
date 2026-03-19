import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'

function Productsizemodel () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex place-items-center h-[22px] lg:h-[25px] xl:h-[30px] gap-x-[7px] lg:gap-x-[10px]  px-[10px] xl:px-[15px] rounded-full border-[1px] border-[#CECECE] hover:bg-[#F7E7FF] cursor-pointer'>
          <h1 className='ml-[2px] text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] font-normal '>
            Size Chart
          </h1>
          <Image
            alt='img'
            width={0}
            height={0}
            src='/assests/comman/rightarray.svg'
            className='w-[8px] md:w-[10px] lg:w-[11px] xl:w-[12px] h-[8px] md:h-[10px] lg:h-[11px] xl:h-[12px] lg:mt-[2px] '
          />
        </div>
      </DialogTrigger>
      <DialogContent className=' rounded-[18px] max-w-[95%] md:max-w-[80%]  xl:max-w-[70%] w-full h-[78vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh] 2xl:h-[68vh] p-0   shadow-none border-0 '>
        <div className='md:flex justify-between h-[78vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh] 2xl:h-[68vh]'>
          <div className='md:flex w-[100%] justify-between '>
            <div className=' px-[15px] lg:px-[25px] py-[20px] lg:py-[30px] xl:py-[40px] w-[100%]'>
              <div className=''>
                <h1 className='text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold'>
                  Size Chart
                </h1>
                <div className='mt-[20px] lg:mt-[30px] w-[100%] h-[1px] bg-[#B5B5B5]'>
                  {' '}
                </div>
                <div className='mt-[5px] lg:mt-[10px] flex justify-between place-items-center px-[15px] lg:px-[20px]'>
                  <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] text-center font-bold'>
                    Size
                  </h1>
                  <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] text-center font-bold'>
                    Burst
                  </h1>
                  <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] text-center font-bold'>
                    Waist
                  </h1>
                </div>
                <div className='mt-[5px] lg:mt-[10px] w-[100%] h-[1px] bg-[#B5B5B5]'>
                  {' '}
                </div>
                <div className='mt-[10px] px-[15px] lg:px-[20px] flex justify-between place-items-center'>
                  <ul className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal '>
                    <li className='text-center'>S</li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px] '>
                      M
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      L
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      XL
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      XXL
                    </li>
                  </ul>
                  <ul className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal mr-[5px]'>
                    <li className='text-center'>34.0</li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px] '>
                      36.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      38.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      40.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      42.0
                    </li>
                  </ul>
                  <ul className='text-[11px] lg:text-[13px] xl:text-[14px] font-normal mr-[5px]'>
                    <li className='text-center'>44.0</li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px] '>
                      44.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      45.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      45.0
                    </li>
                    <li className='text-center mt-[10px] lg:mt-[15px] xl:mt-[20px]'>
                      46.0
                    </li>
                  </ul>
                </div>
                <div className='mt-[10px] w-[100%] h-[1px] bg-[#B5B5B5]'> </div>
              </div>
            </div>
            <div className='h-[1px] md:h-full w-[100%] md:w-[1px] bg-[#D3D3D3] flex place-items-end justify-end'></div>
          </div>

          <div className='w-[100%] px-[15px] lg:px-[25px] py-[20px] lg:py-[30px] xl:py-[40px]'>
            <div className=' '>
              <h1 className='text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold'>
                How to Measure
              </h1>
              <div className='mt-[10px] lg:mt-[25px] '>
                <h1 className='text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] font-semibold '>
                  Waist :
                  <span className='font-normal'>
                    Measure the narrowest part above your navel.
                  </span>
                </h1>
                <h1 className='text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] font-semibold '>
                  Shoulder :
                  <span className='font-normal'>
                    {' '}
                    Measure across your back from one shoulder tip to the other.
                  </span>
                </h1>
                <h1 className='text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] font-semibold '>
                  Bust :
                  <span className='font-normal'>
                    Measure around the fullest part of your bust.
                  </span>
                </h1>
                <h1 className='text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] font-semibold '>
                  Hip :
                  <span className='font-normal'>
                    Measure the widest area below your waist.
                  </span>
                </h1>
              </div>
              <div className='mt-[15px] lg:mt-[20px] xl:mt-[25px] flex justify-center'>
                <Image
                  alt='measure'
                  width={0}
                  height={0}
                  src='/assests/productdetail/model/measure.svg'
                  className='w-[120px] lg:w-[150px] xl:w-[165px] h-[130px] lg:h-[170px] xl:h-[235px]'
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Productsizemodel
