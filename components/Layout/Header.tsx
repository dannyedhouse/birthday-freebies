'use client'

import {SuggestionModal} from '@/components/Modal/SuggestionModal'
import LightModeToggle from '@/components/LightModeToggle/LightModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi'
import {LightModeToggleMobile} from '../LightModeToggle/LightModeToggleMobile'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex">
            <Image src="/logo.svg" width={200} height={200} alt="logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <LightModeToggle />
            <SuggestionModal />
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ${
            isOpen ? 'max-h-60' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-3 py-4 pb-5 px-2">
            <SuggestionModal isMobile />
            <LightModeToggleMobile />
          </div>
        </div>
      </div>
    </header>
  )
}
