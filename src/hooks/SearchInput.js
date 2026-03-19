'use client'
import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react'

export default function SearchInput () {
  const phrases = [
    'Search Products',
    'Search Clothes',
    'Search Brands',
    'Search More...'
  ]
  const [placeholder, setPlaceholder] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    if (charIndex < currentPhrase.length) {
      const typingTimeout = setTimeout(() => {
        setPlaceholder(prev => prev + currentPhrase.charAt(charIndex))
        setCharIndex(prev => prev + 1)
      }, 100) // typing speed
      return () => clearTimeout(typingTimeout)
    } else {
      const nextTimeout = setTimeout(() => {
        setPlaceholder('')
        setCharIndex(0)
        setPhraseIndex(prev => (prev + 1) % phrases.length)
      }, 1500) // pause before next phrase
      return () => clearTimeout(nextTimeout)
    }
  }, [charIndex, phraseIndex, phrases])

  return (
    <input
    
    
      placeholder={placeholder}
      className='h-[13px] lg:h-[15px] xl:h-[20px] outline-none w-[100%] placeholder:text-[10px] lg:placeholder:text-[14px] xl:placeholder:text-[16px] text-[10px] lg:text-[14px] xl:text-[16px]'
    />
  )
}
