'use client'
import Autoplay from 'embla-carousel-autoplay'
// import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

function LoginSlider() {
    const ImagesData = {
        LoginBanner: '/assests/login/slide.svg',
       
      }
      // /assests/sliderimage/slider.svg
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
      ])
      const [selectedIndex, setSelectedIndex] = useState(0)
      const [scrollSnaps, setScrollSnaps] = useState([])
    
      const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
      }, [emblaApi])
    
      useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
      }, [emblaApi, onSelect])
    
      const slides = [1, 2] // Duplicate slides for now
  return (
    <div className=''>
          <div className='navbar-main h-[full] grid place-items-center '>
            <div className='relative overflow-hidden' ref={emblaRef}>
              <div className='flex space-x-5'>
                {slides.map((_, index) => (
                  <div className='min-w-full flex-shrink-0' key={index}>
                   
                    <div className='hidden md:block rounded-[18px] w-fit '>
                      <Image
                        src={ImagesData?.LoginBanner}
                        alt='Login Banner'
                        width={500}
                        height={500}
                        className='w-[100%] h-[78vh] md:h-[67vh] lg:h-[64vh] xl:h-[65vh] 2xl:h-[64vh] object-contain rounded-[18px]'
                        
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Dots */}
              <div className='absolute bottom-[28px] right-16 lg:right-24 xl:right-28 2xl:right-30 -translate-y-1/2 flex flex-row items-center space-x-2'>
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4 mx-1 rounded-full transition-all ${
                      index === selectedIndex ? 'bg-white' : 'bg-white opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default LoginSlider
