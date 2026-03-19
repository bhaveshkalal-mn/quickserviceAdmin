import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'

function ShowImages () {
  const initialProducts = [
    {
      id: 1,
      isImage: true,
      url: '/assests/productdetail/model-1.png',
      isActive: true
    },
    {
      id: 2,
      isImage: false,
      url: '/assests/productdetail/model-2.png',
      isActive: false
    },
    {
      id: 3,
      isImage: true,
      url: '/assests/productdetail/model-3.png',
      isActive: false
    },
    {
      id: 4,
      isImage: true,
      url: '/assests/productdetail/model-4.png',
      isActive: false
    }
  ]
  const [productLists, setProductList] = useState(initialProducts)

  const [CurrentURL, setCurrentURL] = useState(productLists[0])
  const hoverTimeout = React.useRef(null)

  React.useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  const handleHover = (info, idx) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => {
      setCurrentURL(info)
      setProductList(prev =>
        prev?.map((item, i) => ({
          ...item,
          isActive: i === idx
        }))
      )
    }, 200) // 300ms delay
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          alt='img'
          width={0}
          height={0}
          src='/assests/comman/groupimages.svg'
          className='w-[27px] lg:w-[35px] xl:w-[40px] 2xl:w-[44px] h-[27px] lg:h-[35px] xl:h-[40px] 2xl:h-[44px] cursor-pointer '
        />
      </DialogTrigger>
      <DialogContent className='bg-[black] rounded-[18px] max-w-[300px] md:max-w-[440px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[840px] w-full h-[70vh] sm:h-[70vh] lg:h-[75vh] xl:h-[80vh]  p-0 text-[white]'>
       
          <div className='sm:flex w-[100%] px-[20px] sm:px-[0px] '>
            <div className='w-[100%] sm:w-[19%] md:w-[25%] lg:w-[24.5%] xl:w-[25%]  2xl:w-[24%] text-[white] py-[20px] sm:py-[0px]  '>
              <div className='flex justify-center place-items-center h-[100%]'>
                <div className='grid grid-cols-4 sm:grid-cols-1 gap-y-[20px] w-[100%] h-fit  rounded-[18px] justify-between place-items-center'>
                  {productLists?.map((res, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          res?.isActive ? '' : 'opacity-75'
                        } relative cursor-pointer w-[45px] md:w-[35px]  lg:w-[50px] xl:w-[60px] h-[45px] md:h-[35px] lg:h-[50px] xl:h-[60px]`}
                      >
                        <Image
                          onMouseEnter={() => handleHover(res, index)}
                          alt='img'
                          width={500}
                          height={500}
                          src={res?.url}
                          className='w-[60px] h-[60px] rounded-[10px] object-cover'
                        />

                        {!res?.isImage && (
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <Image
                              onMouseEnter={() => handleHover(res, index)}
                              alt='img'
                              width={500}
                              height={500}
                              src={'/assests/productdetail/video-play.svg'}
                              className='w-[25px] h-[25px] rounded-[10px] object-cover'
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className='w-[100%] sm:w-[62%] md:w-[50%] lg:w-[51%] xl:w-[50%] 2xl:w-[52.5%] '>
              <div className='relative  overflow-hidden h-full'>
                <Image
                  alt='img'
                  width={800}
                  height={800}
                  src={CurrentURL?.url}
                  className='w-[100%] h-[60vh] sm:h-[70vh] lg:h-[75vh] xl:h-[80vh] object-cover grid place-items-center'
                />
                {!CurrentURL?.isImage && (
                  <div className='absolute inset-0 flex items-center justify-center z-10'>
                    <Image
                      alt='img'
                      width={500}
                      height={500}
                      src={'/assests/productdetail/video-play.svg'}
                      className='w-[80px] h-[80px] rounded-[10px] object-cover'
                    />
                  </div>
                )}
              </div>
            </div>
            <div className=' w-[19%] md:w-[25%] lg:w-[24.5%] xl:w-[25%] 2xl:w-[24%] rounded-[18px]'></div>
          </div>
      
      </DialogContent>
    </Dialog>
  )
}

export default ShowImages
