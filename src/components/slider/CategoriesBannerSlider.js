'use client'
import Autoplay from 'embla-carousel-autoplay'
// import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

function CategoriesBannerSlider() {

    const ImagesData = {
        DesktopBanner: '/assests/sliderimage/categories-banner-image.svg',
        TabletBanner: '/assests/sliderimage/categories-banner-image.svg',
        mobileBaner: '/assests/sliderimage/categories-banner-image.svg'
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
                   {/* Mobile Image ( <640px ) */}
                   <div className='block sm:hidden'>
                     <Image
                       src={ImagesData?.mobileBaner}
                       alt='Mobile Banner'
                       width={500}
                       height={500}
                       className='object-contain w-screen h-auto'
                       priority
                     />
                   </div>
   
                   {/* Tablet Image ( ≥640px and <1024px ) */}
                   <div className='hidden sm:block lg:hidden'>
                     <Image
                       src={ImagesData?.TabletBanner}
                       alt='Tablet Banner'
                       width={500}
                       height={500}
                       className='object-contain w-screen h-auto'
                       priority
                     />
                   </div>
   
                   {/* Desktop Image ( ≥1024px ) */}
                   <div className='hidden lg:block'>
                     <Image
                       src={ImagesData?.DesktopBanner}
                       alt='Desktop Banner'
                       width={500}
                       height={500}
                       className='w-[100%] object-contain  h-auto'
                       
                       priority
                     />
                   </div>
                 </div>
               ))}
             </div>
   
             {/* Dots */}
             <div className='absolute bottom-[28px] right-36 -translate-y-1/2 flex flex-row items-center space-x-2'>
               {scrollSnaps.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => emblaApi?.scrollTo(index)}
                   className={`h-4 w-4 mx-1 rounded-full transition-all ${
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

export default CategoriesBannerSlider
