'use client'
import Signature from '@/components/model/Signature'
import React, { useState } from 'react'

function ESignature () {
  const [display, setDisplay] = useState(false)
  const [signatureImage, setSignatureImage] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div
        id='boxshadow3'
        className='w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]'
      >
        {display ? (
          <div>
            <div className='flex justify-between place-items-center'>
              <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>
                Your Signature
              </h1>
              <Signature
                setImage={setSignatureImage}
                setShowSign={setDisplay}
                btnText={'Edit'}
              />
            </div>
            <div className='w-[100%] h-[120px] xl:h-[150px] bg-[white] text-center'>
              <div className='grid place-items-center h-full'>
                <div className='-rotate-6'>
                  {signatureImage && (
                    <img src={signatureImage} alt='Typed Signature Preview' />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-between place-items-center'>
            <h1 className='text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]'>
              Add Your e-Signature
            </h1>
            <Signature
              setImage={setSignatureImage}
              setShowSign={setDisplay}
              btnText={'Add Your Signature'}
            />
          </div>
        )}

        {/* {display ? (
         
        ) : null} */}
      </div>
    </div>
  )
}

export default ESignature
