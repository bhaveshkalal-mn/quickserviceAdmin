'use client'
import React, { useRef, useState, useEffect } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'
import SignatureCanvas from 'react-signature-canvas'

// Dynamically import SignatureCanvas with proper error handling
// const SignatureCanvas = dynamic(
//   () =>
//     import('react-signature-canvas')
//       .then(mod => mod.default)
//       .catch(error => {
//         console.error('Failed to load SignatureCanvas:', error)
//         return () => <div>Signature canvas failed to load</div>
//       }),
//   {
//     ssr: false,
//     loading: () => <div>Loading signature pad...</div>
//   }
// )

function Signature ({ setImage, setShowSign, btnText }) {
  const [activeTab, setActiveTab] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sigRef = useRef(null)
  const [signatureValue, setSignatureValue] = useState('')
  const [typedImage, setTypedImage] = useState(null)

  // Ensure component is mounted before using refs
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const clearSignature = () => {
    if (activeTab) {
      setSignatureValue('')
    } else if (sigRef.current && isMounted) {
      sigRef.current.clear()
    }
  }

  function dataURLtoBlob (dataURL) {
    try {
      const byteString = atob(dataURL.split(',')[1])
      const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]
      const ab = new ArrayBuffer(byteString.length)
      const ia = new Uint8Array(ab)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ab], { type: mimeString })
    } catch (error) {
      console.error('Error converting dataURL to blob:', error)
      return null
    }
  }

  const saveSignature = () => {
    try {
      if (activeTab) {
        // User typed a signature → convert it to image
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        // Set canvas size
        canvas.width = 400
        canvas.height = 120

        // Background color
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Signature text style
        ctx.font = "48px 'Edu NSW ACT Cursive', cursive"
        ctx.fillStyle = 'black'
        ctx.textBaseline = 'middle'
        ctx.fillText(signatureValue, 20, canvas.height / 2)

        // Convert to PNG Data URL
        const dataURL = canvas.toDataURL('image/png')
        const blob = dataURLtoBlob(dataURL)

        if (blob) {
          setTypedImage(dataURL)
          setImage(dataURL)
          setShowSign(true)
        }
      } else {
        // Drawn signature → use ref with safety checks
        if (
          isMounted &&
          sigRef.current &&
          typeof sigRef.current.getTrimmedCanvas === 'function'
        ) {
          const dataURL = sigRef.current
            .getTrimmedCanvas()
            .toDataURL('image/png')
          setImage(dataURL)
          setShowSign(true)
        } else {
          console.error('SignatureCanvas not ready or not available')
          // Fallback: show error message or alternative UI
        }
      }
    } catch (error) {
      console.error('Error saving signature:', error)
    }
  }

  // Safe render for SignatureCanvas
  const renderSignatureCanvas = () => {
    if (!isMounted) {
      return <div>Loading signature pad...</div>
    }

    return (
      <SignatureCanvas
        ref={sigRef}
        penColor='black'
        canvasProps={{
          className: 'w-full h-[85px] lg:h-[100px] xl:h-[135px]'
        }}
      />
    )
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='flex justify-between place-items-center gap-x-[10px] px-[10px] lg:px-[15px] xl:px-[20px] rounded-[8px] bg-[#8225AF] hover:opacity-90 cursor-pointer h-[30px] lg:h-[35px] xl:h-[40px]'>
            {btnText !== 'Edit' ? (
              <>
                <Image
                  alt='img'
                  width={16}
                  height={16}
                  src='/assests/becomeseller/draw.svg'
                  className='w-[16px] lg:w-[20px] xl:w-[24px] h-[16px] lg:h-[20px] xl:h-[24px]'
                />
                <h1 className='text-[10px] lg:text-[12px] xl:text-[14px] text-[white]'>
                  Add Your Signature
                </h1>
              </>
            ) : (
              <h1 className='text-[10px] lg:text-[12px] xl:text-[14px] text-[white]'>
                Edit
              </h1>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className='w-[90%] md:w-[400px] lg:w-[450px] xl:w-[550px] bg-[#fff] rounded-[10px] border-[1px] border-[#DDD] p-0'>
          <div className='w-[100%] h-[100%]'>
            <div className='p-[25px] xl:p-[35px]'>
              <div className=''>
                <h1 className='text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal'>
                  Add Your e-Signature
                </h1>
                <div className='mt-[10px] lg:mt-[20px] xl:mt-[25px]'>
                  <div className='relative w-[100%] h-[150px] lg:h-[180px] xl:h-[230px] px-[15px] py-[10px] border-[1px] border-[#EAEAEA] rounded-[10px] lg:rounded-[14px]'>
                    <div className='flex place-items-center justify-between h-[30px]'>
                      <ul className='flex place-items-center gap-3 lg:gap-5'>
                        <li
                          className='cursor-pointer'
                          onClick={() => setActiveTab(false)}
                        >
                          <Image
                            alt='draw'
                            height={16}
                            width={16}
                            className='w-[16px] lg:w-[18px] xl:w-[20px] h-[14px] lg:h-[16px] xl:h-[20px]'
                            src='/assests/becomeseller/bluedraw.svg'
                          />
                        </li>
                        <li
                          className='cursor-pointer font-bold'
                          onClick={() => setActiveTab(true)}
                        >
                          T
                        </li>
                      </ul>
                      <ul>
                        <li
                          onClick={clearSignature}
                          className='text-[#0079C1] text-[11px] lg:text-[12px] xl:text-[14px] font-normal cursor-pointer'
                        >
                          Clear
                        </li>
                      </ul>
                    </div>
                    <div className='mt-[5px] lg:mt-[10px] xl:mt-[15px]'>
                      {activeTab ? (
                        <div>
                          <div className='w-[100%] flex place-items-center h-[30px] lg:h-[35px] xl:h-[45px] border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]'>
                            <input
                              value={signatureValue}
                              onChange={e => setSignatureValue(e.target.value)}
                              className='outline-none w-[100%] text-[11px] lg:text-[12px] xl:text-[14px] font-normal'
                              placeholder='Enter name to create signature'
                            />
                          </div>
                          <div className='text-center h-[100px]'>
                            <div className='-rotate-12 grid place-items-center h-full'>
                              <span id='cursiveText' className='text-2xl'>{signatureValue}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        renderSignatureCanvas()
                      )}
                    </div>
                    {!activeTab && (
                      <span className='absolute bottom-1 flex justify-center w-[94%] items-end text-[#ADADAD] text-[11px] lg:text-[12px] xl:text-[14px] font-normal'>
                        Draw Signature
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className='mt-[15px] xl:mt-[20px]'>
                <h1 className='text-[10px] lg:text-[12px] xl:text-[14px] font-normal'>
                  By clicking 'Add', I confirm that this represents my
                  electronic signature and is valid when used by me or on my
                  behalf.
                </h1>
              </div>
              <div className='flex justify-center place-items-center gap-x-[10px] lg:gap-x-[15px] xl:gap-x-[20px] mt-[20px] lg:mt-[25px] xl:mt-[30px]'>
                <DialogClose asChild>
                  <button
                    onClick={saveSignature}
                    className='px-[17px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px] xl:text-[14px] text-[white] font-normal cursor-pointer'
                  >
                    Add
                  </button>
                </DialogClose>
                <DialogClose>
                  <button className='px-[10px] lg:px-[15px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] border-[1px] border-[#8225AF] hover:bg-[#F2F7FF] text-[11px] lg:text-[12px] xl:text-[14px] font-normal cursor-pointer'>
                    Cancel
                  </button>
                </DialogClose>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Signature
